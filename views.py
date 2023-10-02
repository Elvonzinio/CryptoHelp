from flask import Blueprint, render_template, jsonify
from main import getdata, RSI, Stoch, MACD, fearAndGreed, gaussianChannel, SMA, crossCheck
import main
import json

views = Blueprint(__name__, 'views')


@views.route('/home')
def index():
    dfDay = getdata('BTCUSDT', '1d', '99999')
    dfWeek = getdata('BTCUSDT', '1w', '99999')
    dfMonth = getdata('BTCUSDT', '1M', '99999')

    daily = dfDay[['Close']]
    daily = daily.to_json(orient='table', date_format='iso')

    weekly = dfWeek[['Close']]
    weekly = weekly.to_json(orient='table', date_format='iso')

    monthly = dfMonth[['Close']]
    monthly = monthly.to_json(orient='table', date_format='iso')

    #df['sma30'] = SMA(df, 'Close', window_size=30)
    #df['sma93'] = SMA(df, 'Close', window_size=93)
    #df['rsi'] = RSI(df)
    #df['macd'] = MACD(df)
    #df['StochK'], df['StochD'] = Stoch(df.rsi, df.rsi, df.rsi, 3, 3, 14)
    #fag = fearAndGreed(main.r)
    #print(fag)
    #df.dropna(inplace=True)
    #print(df)

    #print(crossCheck(df, 'sma30', 'sma93'))
    #weeklyData = {'name': 'John', 'age': 30, 'city': 'New York'}
    #weeklyDataJSON = json.dumps(weeklyData)

    return render_template('index.html', dailyDataJSON=daily, weeklyDataJSON=weekly, monthlyDataJSON=monthly)


@views.route('/login')
def login():
    return render_template('login.html')
