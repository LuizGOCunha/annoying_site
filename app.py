from flask import Flask, render_template
from uuid import uuid4
import time

hi_mr_user_address = uuid4()

app = Flask(__name__)

with app.app_context():

    @app.route("/")
    def main():
        return render_template("main.html", secret_page=hi_mr_user_address)

    @app.route(f"/{hi_mr_user_address}")
    def hello():
        # We can have a code on the js side (generated when clicking button) and the backend side
        # if it's the correct code we load the page, if not we give them the mr frog treatment

        return render_template("hi_mr_user.html")

    @app.route("/you-dit-it")
    def success():
        return render_template("success.html")
