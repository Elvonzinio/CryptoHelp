from binance import Client

import Keys
import pandas as pd
import ta
import requests
import matplotlib.pyplot as plt
import numpy as np
import statistics as st
import time
import datetime

# pd.set_option('display.max_columns', None)
# pd.set_option('display.max_rows', None)
client = Client(Keys.api_key, Keys.api_secret)
r = requests.get('https://api.alternative.me/fng/')


def getdata(symbol, interval, lookback) -> pd.DataFrame:
    frame = pd.DataFrame(client.get_historical_klines(symbol, interval, lookback + ' week ago UTC'))
    frame = frame.iloc[:, :6]
    frame.columns = ['Date', 'Open', 'High', 'Low', 'Close', 'Volume']
    frame = frame.set_index('Date')
    frame.index = pd.to_datetime(frame.index, unit='ms')
    frame = frame.astype(float)
    return frame


def RSI(df):
    rsi = ta.momentum.rsi(df.Close, window=14)
    return rsi


def Stoch(close, high, low, smoothk, smoothd, n):
    lowestlow = pd.Series.rolling(low, window=n, center=False).min()
    highesthigh = pd.Series.rolling(high, window=n, center=False).max()
    K = pd.Series.rolling(100 * ((close - lowestlow) / (highesthigh - lowestlow)), window=smoothk).mean()
    D = pd.Series.rolling(K, window=smoothd).mean()
    return K, D


def MACD(df):
    macd = ta.trend.macd_diff(df.Close)
    return macd


def fearAndGreed(request):
    fag = request.json()
    fearAndGreed = fag['data'][0]['value']
    return fearAndGreed


def SMA(df, source, window_size):
    sma = df[source].rolling(window=window_size).mean()
    return sma


def EMA(df, source, window_size):
    ema = df[source].ewm(span=window_size, adjust=False).mean()
    return ema


def picycle(df):  # musi byc daily
    bottomcheck = crossCheck(df, 'shortSMA150', 'longSMA471')
    topcheck = crossCheck(df, 'shortSMA111', 'longSMA350')

    if bottomcheck == 'Crossdown':
        return 'PiCycleLow'
    elif topcheck == 'Crossup':
        return 'PiCycleHigh'
    else:
        return None


def historical_volatility(df, source, length, per):  # zmienic lekko prog
    annual = 365
    log_returns = np.log(df[source] / df[source].shift(1))
    rolling_stdev = log_returns.rolling(length).std()
    hv = 100 * rolling_stdev * np.sqrt(annual / per)
    return hv


def RCI3Lines(src, itvs=9, itvm=36, itvl=52):
    def ord(seq, idx, itv):
        p = seq[idx]
        o = 1
        s = 0
        for i in range(itv):
            if p < seq[i]:
                o += 1
            else:
                if p == seq[i]:
                    s += 1
                    o += (s - 1) / 2.0
        return o

    def d(itv):
        sum = 0.0
        for i in range(itv):
            sum = sum + pow((i + 1) - ord(src, i, itv), 2)
        return sum

    def rci(itv):
        return (1 - 6 * d(itv) / (itv * (itv * itv - 1))) * 100

    rci_short = rci(itvs)
    rci_middle = rci(itvm)
    rci_long = rci(itvl)

    return rci_short, rci_middle, rci_long


def crossCheck(df, shortSMA, longSMA):
    if df[shortSMA].iloc[-1] > df[longSMA].iloc[-1] and df[shortSMA].iloc[-2] <= df[longSMA].iloc[-2]:
        return 'Crossup'  # jak short przebija od dolu longa
    elif df[shortSMA].iloc[-1] < df[longSMA].iloc[-1] and df[shortSMA].iloc[-2] >= df[longSMA].iloc[-2]:
        return 'Crossdown'  # jak short przebija od gory longa
    else:
        return None  # Brak przecięcia


def buysell(df):
    pass


def change(last, before):
    x = ((last - before) / before) * 100
    return round(x, 2)


def main():
    dfDay = getdata('BTCUSDT', '1d', '9000')
    # df = getdata('BTCUSDT', '1w', '9000')
    dfDay['rsi'] = RSI(dfDay)
    dfDay['macd'] = MACD(dfDay)
    dfDay['StochK'], dfDay['StochD'] = Stoch(dfDay.rsi, dfDay.rsi, dfDay.rsi, 3, 3, 14)
    # bottom
    dfDay['longSMA471'] = SMA(dfDay, 'Close', window_size=471)
    dfDay['shortSMA150'] = SMA(dfDay, 'Close', window_size=150)
    # top
    dfDay['longSMA350'] = SMA(dfDay, 'Close', window_size=350)
    dfDay['shortSMA111'] = SMA(dfDay, 'Close', window_size=111)
    e = picycle(dfDay)
    print(e)
    # df['volatility'] = volatility(df)
    # df['sma35'] = SMA(df, 'Close', window_size=35)
    # df['sma93'] = SMA(df, 'Close', window_size=93)
    # df['rsi'] = RSI(df)
    # df['macd'] = MACD(df)
    # df['StochK'], df['StochD'] = Stoch(df.rsi, df.rsi, df.rsi, 3, 3, 14)
    # fag = fearAndGreed(r)
    # print(fag)
    # df.dropna(inplace=True)
    # print(df)
    # print(crossCheck(df, 'sma35', 'sma93'))


if __name__ == '__main__':
    main()
