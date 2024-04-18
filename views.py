import json

from flask import Blueprint, jsonify, render_template

import main
from main import (
    EMA,
    MACD,
    RSI,
    SMA,
    RCI3Lines,
    Stoch,
    change,
    crossCheck,
    fearAndGreed,
    getdata,
    historical_volatility,
    picycle,
    r,
)

views = Blueprint(__name__, "views")


@views.route("/BTCUSDT")
def index():
    dfDay = getdata("BTCUSDT", "1d", "99999")
    dfDay["rsi"] = RSI(dfDay)
    dfDay["macd"] = MACD(dfDay)
    dfDay["StochK"], dfDay["StochD"] = Stoch(dfDay.rsi, dfDay.rsi, dfDay.rsi, 3, 3, 14)
    dfDay["volatility"] = historical_volatility(dfDay, "Close", length=10, per=1)
    dfDay["rciShort"], dfDay["rciMiddle"], dfDay["rciLong"] = RCI3Lines(dfDay["Close"])
    # picyclebottom
    dfDay["longSMA471"] = SMA(dfDay, "Close", window_size=471) * 745 / 1000
    dfDay["shortEMA150"] = EMA(dfDay, "Close", window_size=150)
    # picycletop
    dfDay["longSMA350"] = SMA(dfDay, "Close", window_size=350) * 2
    dfDay["shortSMA111"] = SMA(dfDay, "Close", window_size=111)

    dfWeek = getdata("BTCUSDT", "1w", "99999")
    dfWeek["rsi"] = RSI(dfWeek)
    dfWeek["macd"] = MACD(dfWeek)
    dfWeek["StochK"], dfWeek["StochD"] = Stoch(dfWeek.rsi, dfWeek.rsi, dfWeek.rsi, 3, 3, 14)
    dfWeek["volatility"] = historical_volatility(dfWeek, "Close", length=10, per=7)
    dfWeek["rciShort"], dfWeek["rciMiddle"], dfWeek["rciLong"] = RCI3Lines(dfWeek["Close"])

    dfMonth = getdata("BTCUSDT", "1M", "99999")
    dfMonth["rsi"] = RSI(dfMonth)
    dfMonth["macd"] = MACD(dfMonth)
    dfMonth["StochK"], dfMonth["StochD"] = Stoch(dfMonth.rsi, dfMonth.rsi, dfMonth.rsi, 3, 3, 14)
    dfMonth["volatility"] = historical_volatility(dfMonth, "Close", length=10, per=7)
    dfMonth["rciShort"], dfMonth["rciMiddle"], dfMonth["rciLong"] = RCI3Lines(dfMonth["Close"])

    daily = dfDay.to_json(orient="table", date_format="iso")
    weekly = dfWeek.to_json(orient="table", date_format="iso")
    monthly = dfMonth.to_json(orient="table", date_format="iso")

    # df['sma30'] = SMA(df, 'Close', window_size=30)
    # df['sma93'] = SMA(df, 'Close', window_size=93)

    # fag = fearAndGreed(main.r)
    # print(fag)
    # df.dropna(inplace=True)
    # print(df)

    # print(crossCheck(df, 'sma30', 'sma93'))

    ethPrice = getdata("ETHUSDT", "1d", "1")
    ethPriceLast = ethPrice["Close"].iloc[-1]
    ethPriceBefore = ethPrice["Close"].iloc[-7]
    ethChange = change(ethPriceLast, ethPriceBefore)
    ethVolume = ethPrice["Volume"].iloc[-1]
    ethVolume = round(ethVolume, 2)

    btcPriceLast = dfDay["Close"].iloc[-1]
    btcPriceBefore = dfDay["Close"].iloc[-7]
    btcChange = change(btcPriceLast, btcPriceBefore)
    btcVolume = dfDay["Volume"].iloc[-1]
    btcVolume = round(btcVolume, 2)

    fag = fearAndGreed(r)

    return render_template(
        "index.html",
        dailyDataJSON=daily,
        weeklyDataJSON=weekly,
        monthlyDataJSON=monthly,
        ethPrice=ethPriceLast,
        ethChange=ethChange,
        ethVolume=ethVolume,
        btcPrice=btcPriceLast,
        btcChange=btcChange,
        btcVolume=btcVolume,
        fag=fag,
    )


@views.route("/ETHUSDT")
def indexeth():
    dfDay = getdata("ETHUSDT", "1d", "99999")
    dfDay["rsi"] = RSI(dfDay)
    dfDay["macd"] = MACD(dfDay)
    dfDay["StochK"], dfDay["StochD"] = Stoch(dfDay.rsi, dfDay.rsi, dfDay.rsi, 3, 3, 14)
    dfDay["volatility"] = historical_volatility(dfDay, "Close", length=10, per=1)
    dfDay["rciShort"], dfDay["rciMiddle"], dfDay["rciLong"] = RCI3Lines(dfDay["Close"])
    # picyclebottom
    dfDay["longSMA471"] = SMA(dfDay, "Close", window_size=471) * 745 / 1000
    dfDay["shortEMA150"] = EMA(dfDay, "Close", window_size=150)
    # picycletop
    dfDay["longSMA350"] = SMA(dfDay, "Close", window_size=350) * 2
    dfDay["shortSMA111"] = SMA(dfDay, "Close", window_size=111)

    dfWeek = getdata("ETHUSDT", "1w", "99999")
    dfWeek["rsi"] = RSI(dfWeek)
    dfWeek["macd"] = MACD(dfWeek)
    dfWeek["StochK"], dfWeek["StochD"] = Stoch(dfWeek.rsi, dfWeek.rsi, dfWeek.rsi, 3, 3, 14)
    dfWeek["volatility"] = historical_volatility(dfWeek, "Close", length=10, per=7)
    dfWeek["rciShort"], dfWeek["rciMiddle"], dfWeek["rciLong"] = RCI3Lines(dfWeek["Close"])

    dfMonth = getdata("ETHUSDT", "1M", "99999")
    dfMonth["rsi"] = RSI(dfMonth)
    dfMonth["macd"] = MACD(dfMonth)
    dfMonth["StochK"], dfMonth["StochD"] = Stoch(dfMonth.rsi, dfMonth.rsi, dfMonth.rsi, 3, 3, 14)
    dfMonth["volatility"] = historical_volatility(dfMonth, "Close", length=10, per=7)
    dfMonth["rciShort"], dfMonth["rciMiddle"], dfMonth["rciLong"] = RCI3Lines(dfMonth["Close"])

    daily = dfDay.to_json(orient="table", date_format="iso")
    weekly = dfWeek.to_json(orient="table", date_format="iso")
    monthly = dfMonth.to_json(orient="table", date_format="iso")

    # df['sma30'] = SMA(df, 'Close', window_size=30)
    # df['sma93'] = SMA(df, 'Close', window_size=93)

    # fag = fearAndGreed(main.r)
    # print(fag)
    # df.dropna(inplace=True)
    # print(df)

    # print(crossCheck(df, 'sma30', 'sma93'))

    return render_template("ethusdt.html", dailyDataJSON=daily, weeklyDataJSON=weekly, monthlyDataJSON=monthly)


@views.route("/login")
def login():
    return render_template("login.html")
