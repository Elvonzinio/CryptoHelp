from flask import Blueprint, render_template

views = Blueprint(__name__, 'views')

@views.route('/')
def index():
    return render_template('index.html')


@views.route('/login')
def login():
    return render_template('login.html')