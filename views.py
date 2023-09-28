from flask import Blueprint, render_template, jsonify
from main import getdata, RSI, Stoch, MACD, fearAndGreed, gaussianChannel, SMA, crossCheck
import main

views = Blueprint(__name__, 'views')


@views.route('/home', methods=['GET'])
def index():
    daily = getdata('BTCUSDT', '1d', '99999')


    #df['sma30'] = SMA(df, 'Close', window_size=30)
    #df['sma93'] = SMA(df, 'Close', window_size=93)
    #df['rsi'] = RSI(df)
    #df['macd'] = MACD(df)
    #df['StochK'], df['StochD'] = Stoch(df.rsi, df.rsi, df.rsi, 3, 3, 14)
    #fag = fearAndGreed(main.r)
    #print(fag)
    #df.dropna(inplace=True)
    #print(df)
    #print(weekly)
    #print(crossCheck(df, 'sma30', 'sma93'))

    return render_template('index.html')

def sendJson():
    df = getdata('BTCUSDT', '1w', '99999')
    weekly = df[['Close']]
    weekly = weekly.to_json(orient='index', date_format='iso') #orient=table
    return jsonify(weekly)


@views.route('/login')
def login():
    return render_template('login.html')
