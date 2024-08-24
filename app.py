from flask import Flask, render_template

app = Flask(__name__)

with app.app_context():

    @app.route("/")
    def main():
        return render_template("main.html")
