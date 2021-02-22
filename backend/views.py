from flask import render_template
from backend import app, db
from backend.models import *
import json

@app.route("/api")
def index():
    return {'greeting': "Hello World"}

@app.route("/students")
def show_students():
    students = Student.query.all()
    s = []
    for student in students:
        s.append(student.firstname)
    return json.dumps(s)