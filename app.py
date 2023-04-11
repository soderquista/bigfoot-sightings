from flask import Flask, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    print("Server received request for 'Home' page")
    return (f"This is the homepage for data concerning sightings from the Bigfoot Field Researchers Organization (BFRO).<br/>"
            f"Available Routes: <br/>"
            f"/api/v1.0/sightings <br/>"
            f"/api/v1.0/climates <br/>")

@app.route("/api/v1.0/sightings")
def sightings():
#    lst = []
    with open('bfro_geocoded.json',encoding = "utf-8") as file:
        data = json.loads(file.read())
        return({"data":data})
if __name__ == '__main__':
    app.run(debug=True)
