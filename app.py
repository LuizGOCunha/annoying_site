from flask import Flask, render_template
from uuid import uuid4
from libraries.cryptography_py.caesar import Caesar

hi_mr_user_address = str(uuid4())

you_did_it_address = str(uuid4())

key = 0
for char in hi_mr_user_address:
    if char.isdigit():
        key += int(char)

encrypted_ydi_address = Caesar(key).encrypt(you_did_it_address)

app = Flask(__name__)

with app.app_context():

    @app.route("/")
    def main():
        return render_template("main.html", secret_page=hi_mr_user_address, encrypted_ydi=encrypted_ydi_address)

    @app.route(f"/{hi_mr_user_address}")
    def hello():
        # We can have a code on the js side (generated when clicking button) and the backend side
        # if it's the correct code we load the page, if not we give them the mr frog treatment

        return render_template("hi_mr_user.html")

    @app.route(f"/{you_did_it_address}")
    def success():
        return render_template("success.html")


if __name__ == "__main__":
    app.run(debug=True)
