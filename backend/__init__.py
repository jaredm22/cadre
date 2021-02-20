from flask import Flask
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL
import os


db_user = os.environ.get('DB_USER')
db_password = os.environ.get('DB_PASS') 

def create_app(test_config=None):
    app = Flask(__name__)
    cors = CORS(app)

    print("database")
    #database configurations
    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = db_user
    app.config['MYSQL_PASSWORD'] = db_password
    app.config['MYSQL_DB'] = 'cadreDB'
    
    mysql = MySQL(app)
    
    #app configurations
    app.config["JSON_SORT_KEYS"] = False
    app.config['CORS_HEADERS'] = 'Content-Type'
    
    #main route
    @app.route("/api", methods=['GET'])
    @cross_origin()
    def mainPage():
        return {'greeting': "Hello World"}
    

    @app.route('/students')
    def students():
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM Students")
        rv = cur.fetchall()
        return str(rv)
    
    return app