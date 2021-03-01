from flask import jsonify, request, json
from backend import app, db
from backend.models import *

@app.route("/api")
def index():
    return {'greeting': "Hello World"}

@app.route("/students")
def show_students():
    students = Student.query.all()
    student_list = []
    for student in students:
        stud = {'id': student.id, 'firstname': student.firstName, 'lastname': student.lastName, 'email': student.email}
        student_list.append(stud)
    return jsonify(students = student_list)

@app.route("/studentCourses")
def get_student_courses():
    content =  request.get_json()
    email = content["email"]

    courses = Student.query.filter_by(email=email).all()
    results = [
        {
            "course": c.course
        }
    for c in courses]
    return jsonify(courses = results)


@app.route("/studentInfo")
def get_student_info():
    content =  request.get_json()
    email = content["email"]

    info = Student.query.filter_by(email= email).first()
    return jsonify(firstName = info.firstName, lastName = info.lastName, email= info.email)

@app.route("/professors")
def show_professors():
    professors = Professor.query.all()
    professor_list = []
    for professor in professors:
        prof = {'id': professor.id, 'firstname': professor.firstName, 'lastname': professor.lastName, 'professorId': professor.professorId, 'email': professor.email}
        professor_list.append(prof)
    return jsonify(professors = professor_list)


@app.route("/courses")
def show_courses():
    courses = Course.query.all()
    course_list = []
    for course in courses:
        cour= {'id': course.id, 'coursename': course.courseName, 'zoomLink': course.zoomLink, 'courseId': course.courseId}
        course_list.append(cour)
    return jsonify(courses = course_list)