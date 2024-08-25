from flask import Flask, render_template
from uuid import uuid4

secret_page = uuid4()

app = Flask(__name__)

with app.app_context():

    @app.route("/")
    def main():
        return render_template("main.html", secret_page=secret_page)

    @app.route(f"/{secret_page}")
    def hello():
        return render_template("hi_mr_user.html")
