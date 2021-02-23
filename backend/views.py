from flask import jsonify
from backend import app, db
from backend.models import *
import json

@app.route("/api")
def index():
    return {'greeting': "Hello World"}

@app.route("/students")
def show_students():
    students = Student.query.all()
    student_list = []
    for student in students:
        stud = {'id': student.id, 'firstname': student.firstname, 'lastname': student.lastname}
        student_list.append(stud)
    return jsonify(students = student_list)