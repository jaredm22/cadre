from flask import Flask
from flask_cors import CORS, cross_origin

def create_app(test_config=None):
    app = Flask(__name__)
    cors = CORS(app)
    
    #app configurations
    app.config["DEBUG"] = True
    app.config["JSON_SORT_KEYS"] = False
    app.config['CORS_HEADERS'] = 'Content-Type'
    
    #main route
    @app.route("/", methods=['GET'])
    @cross_origin()
    def mainPage():
        return "Hello World!"

    return app