from flask import Flask, render_template, redirect
from uuid import uuid4
import time

secret_page = uuid4()

app = Flask(__name__)

with app.app_context():

    @app.route("/")
    def main():
        return render_template("main.html", secret_page=secret_page)

    @app.route(f"/{secret_page}")
    def hello():
        # We can have a code on the js side (generated when clicking button) and the backend side
        # if it's the correct code we load the page, if not we give them the mr frog treatment

        return render_template("hi_mr_user.html")
