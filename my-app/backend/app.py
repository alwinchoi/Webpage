from flask import Flask, request
# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# create a database
# db = SQLAlchmey


@app.route("/")
def hello_word():
    # print("here")
    return "<p>Hello world</p>"

@app.route("/save", methods=['POST'])
def saveData():
    data = request.get_json()


    return "<p>data saved</p>"

if __name__ == '__main__':
    app.run()