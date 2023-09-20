from binance import Client

import Keys
import pandas as pd
import ta
import numpy as np
import time
import datetime

client = Client(Keys.api_key, Keys.api_secret)


def getdata(symbol, interval, lookback)->pd.DataFrame:
    frame = pd.DataFrame(client.get_historical_klines(symbol, interval, lookback + ' week ago UTC'))
    frame = frame.iloc[:, :6]
    frame.columns = ['Time', 'Open', 'High', 'Low', 'Close', 'Volume']
    frame = frame.set_index('Time')
    frame.index = pd.to_datetime(frame.index, unit='ms')
    frame = frame.astype(float)
    return frame


def RSI(df):
    df['rsi'] = ta.momentum.rsi(df.Close, window=14)
    df.dropna(inplace=True)


def Stoch(close, high, low, smoothk, smoothd, n):
    lowestlow = pd.Series.rolling(low, window=n, center=False).min()
    highesthigh = pd.Series.rolling(high, window=n, center=False).max()
    K = pd.Series.rolling(100 * ((close - lowestlow) / (highesthigh - lowestlow)), window=smoothk).mean()
    D = pd.Series.rolling(K, window=smoothd).mean()
    return K, D


def MACD(df):
    df['macd'] = ta.trend.macd_diff(df.Close)
    df.dropna(inplace=True)


df = getdata('BTCUSDT', '1w', '500')
# RSI(df)
# mystochrsi = Stoch(df.rsi, df.rsi, df.rsi, 3, 3, 14)
# df['MyStochrsiK'],df['MyStochrsiD'] = mystochrsi
print(df)
