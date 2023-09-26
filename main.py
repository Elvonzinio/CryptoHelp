from binance import Client

import Keys
import pandas as pd
import ta
import requests
import numpy as np
import time
import datetime

pd.set_option('display.max_columns', None)
#pd.set_option('display.max_rows', None)
client = Client(Keys.api_key, Keys.api_secret)
r = requests.get('https://api.alternative.me/fng/')


def getdata(symbol, interval, lookback)->pd.DataFrame:
    frame = pd.DataFrame(client.get_historical_klines(symbol, interval, lookback + ' week ago UTC'))
    frame = frame.iloc[:, :6]
    frame.columns = ['Time', 'Open', 'High', 'Low', 'Close', 'Volume']
    frame = frame.set_index('Time')
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


def gaussianChannel(df, source ,window_size=20, std_dev=2, filtered_true_range_multiplier=1.414, reduced_lag_mode=False): #std_dev - odchylenie standardowe
    df['gaussSMA'] = df[source].rolling(window=window_size).mean()
    df['StdDev'] = df[source].rolling(window=window_size).std()
    true_range = df['High'] - df['Low']
    filtered_true_range = true_range.rolling(window=window_size).mean() * filtered_true_range_multiplier

    if reduced_lag_mode:
        df['Upper_Channel'] = df['gaussSMA'] + (std_dev * filtered_true_range)
        df['Lower_Channel'] = df['gaussSMA'] - (std_dev * filtered_true_range)
    else:
        df['Upper_Channel'] = df['gaussSMA'] + (std_dev * df['StdDev'])
        df['Lower_Channel'] = df['gaussSMA'] - (std_dev * df['StdDev'])

    return df


def SMA(df, source, window_size):
    sma = df[source].rolling(window=window_size).mean()
    return sma


def main():
    df = getdata('BTCUSDT', '1w', '2000')
    #df['sma50'] = SMA(df, 'Close', window_size=50)
    #df['rsi'] = RSI(df)
    #df['macd'] = MACD(df)
    #df['StochK'], df['StochD'] = Stoch(df.rsi, df.rsi, df.rsi, 3, 3, 14)
    df = gaussianChannel(df, 'Close', 20, 2, 1.414, False)
    #fag = fearAndGreed(r)
    #print(fag)
    #df.dropna(inplace=True)
    print(df)


if __name__ == '__main__':
    main()
