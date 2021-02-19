from flask import Flask
from flask_cors import CORS, cross_origin

def create_app(test_config=None):
    app = Flask(__name__)
    cors = CORS(app)
    
    #app configurations
    app.config["JSON_SORT_KEYS"] = False
    app.config['CORS_HEADERS'] = 'Content-Type'
    
    #main route
    @app.route("/api", methods=['GET'])
    @cross_origin()
    def mainPage():
        return {'greeting': "Hello World"}

    return app