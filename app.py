from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route("/")
def home():
    print("Server received request for 'Home' page")
    return (f"This is the homepage for data concerning sightings from the Bigfoot Field Researchers Organization (BFRO).<br/>"
            f"Available Routes: <br/>"
            f"/api/v1.0/sightings <br/>"
            f"/api/v1.0/climates <br/>")

@app.route("/api/v1.0/sightings")
def sightings():
    lst = []
    with open('bfro_reports.json') as file:
        for line in file:
            lst.append(json.loads(line))
        return jsonify(lst)

if __name__ == '__main__':
    app.run(debug=True)
