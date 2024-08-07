from transformers import pipeline
from flask import Flask, request 

from flask_cors import CORS

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, origins =[r"https://www.pinterest.com/*/*"])

pipe = pipeline("image-classification", model="Nahrawy/AIorNot")

@app.route('/', methods=['GET','POST']) 
def process():
    if request.method == 'POST':
        data = request.form['image']
        prediction = pipe(data)
        print(prediction)
        return format_prediction(prediction)
    else:
        return "<p>Testing posting data</p>"

# functions for now only assumes that input is a dictionary and has only 2 entries
def format_prediction(pred):
    res = f"{pred[0]['label']}:{pred[0]['score']:.3f}"
    res += f", {pred[1]['label']}:{pred[1]['score']:.3f}"
    return res