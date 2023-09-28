from flask import Blueprint, render_template
from main import getdata, RSI, Stoch, MACD, fearAndGreed, gaussianChannel, SMA, crossCheck
import main

views = Blueprint(__name__, 'views')


@views.route('/home', methods=['GET'])
def index():
    daily = getdata('BTCUSDT', '1d', '99999')
    df = getdata('BTCUSDT', '1w', '99999')
    weekly = df.to_json(orient='records', date_unit='ms', index=True)
    #df['sma30'] = SMA(df, 'Close', window_size=30)
    #df['sma93'] = SMA(df, 'Close', window_size=93)
    #df['rsi'] = RSI(df)
    #df['macd'] = MACD(df)
    #df['StochK'], df['StochD'] = Stoch(df.rsi, df.rsi, df.rsi, 3, 3, 14)
    #fag = fearAndGreed(main.r)
    #print(fag)
    #df.dropna(inplace=True)
    print(df)
    #print(crossCheck(df, 'sma30', 'sma93'))

    return render_template('index.html', weekly=weekly)


@views.route('/login')
def login():
    return render_template('login.html')
