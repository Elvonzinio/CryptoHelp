from binance import Client

import Keys
import pandas as pd
import ta
import requests
import matplotlib.pyplot as plt
import numpy as np
import time
import datetime

#pd.set_option('display.max_columns', None)
#pd.set_option('display.max_rows', None)
client = Client(Keys.api_key, Keys.api_secret)
r = requests.get('https://api.alternative.me/fng/')


def getdata(symbol, interval, lookback)->pd.DataFrame:
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


def gaussianChannel(data, window_size=20, num_std_dev=2):

    data['SMA'] = data['Close'].rolling(window=window_size).mean()

    data['StdDev'] = data['Close'].rolling(window=window_size).std()

    data['Upper_Channel'] = data['SMA'] + (num_std_dev * data['StdDev'])
    data['Lower_Channel'] = data['SMA'] - (num_std_dev * data['StdDev'])

    return data


def SMA(df, source, window_size):
    sma = df[source].rolling(window=window_size).mean()
    return sma


def crossCheck(df, shortSMA, longSMA):
    if df[shortSMA].iloc[-1] > df[longSMA].iloc[-1] and df[shortSMA].iloc[-2] <= df[longSMA].iloc[-2]:
        return 'Cross Up'
    elif df[shortSMA].iloc[-1] < df[longSMA].iloc[-1] and df[shortSMA].iloc[-2] >= df[longSMA].iloc[-2]:
        return 'Cross Down'
    else:
        return None  # Brak przecięcia


def buysell(df):
    pass


def main():
    daily = getdata('BTCUSDT', '1d', '9000')
    df = getdata('BTCUSDT', '1w', '9000')
    #df['sma30'] = SMA(df, 'Close', window_size=30)
    #df['sma93'] = SMA(df, 'Close', window_size=93)
    #df['rsi'] = RSI(df)
    #df['macd'] = MACD(df)
    #df['StochK'], df['StochD'] = Stoch(df.rsi, df.rsi, df.rsi, 3, 3, 14)
    #fag = fearAndGreed(r)
    #print(fag)
    #df.dropna(inplace=True)
    #print(df)
    #print(crossCheck(df, 'sma30', 'sma93'))


if __name__ == '__main__':
    main()


    # date_rng = pd.date_range(start='2017-08-14', periods=320, freq='D')
    # close_prices = df['Close']
    # bitcoin_data = pd.DataFrame({'Date': date_rng, 'Close': close_prices})
    #
    #
    # # Obliczanie granic kanału Gaussa za pomocą funkcji
    # gaussian_data = calculate_gaussian_channel(bitcoin_data, window_size=70, num_std_dev=0.5)
    #
    # # Wyświetlenie wyników
    # print(gaussian_data)
    #
    # # Wykres cen zamknięcia, SMA oraz granic kanału Gaussa
    # x = gaussian_data['Date']
    # plt.figure(figsize=(12, 6))
    # plt.plot(x, gaussian_data['Close'], label='Ceny zamknięcia', color='blue')
    # plt.plot(x, gaussian_data['SMA'], label=f'SMA (70-dniowa)', color='orange')
    # plt.plot(x, gaussian_data['Upper_Channel'], label=f'Górny Kanał (2x StdDev)', color='red', linestyle='--')
    # plt.plot(x, gaussian_data['Lower_Channel'], label=f'Dolny Kanał (2x StdDev)', color='green', linestyle='--')
    # plt.title('Kanał Gaussa dla Bitcoina')
    # plt.xlabel('Data')
    # plt.ylabel('Cena')
    # plt.legend()
    # plt.grid(True)
    # plt.show()