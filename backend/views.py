from flask import jsonify, request, json
from backend import app, db
from backend.models import *

@app.route("/api")
# Main route of the app.
def index():
    return {'greeting': "Hello World"}

@app.route("/students")
# Route to show all students in the app database.
def show_students():
    # Querying all students in the database.
    students = Student.query.all()
    student_list = []
    for student in students:
        # Listing the id, firstname, lastname, email, and course of each student.
        stud = {'id': student.id, 'firstname': student.firstName, 'lastname': student.lastName, 'email': student.email}
        student_list.append(stud)
    return jsonify(students = student_list)

@app.route("/studentCourses")
# Route to list all courses that a student is taking. 
def get_student_courses():
    # Parsing inputted json.
    content =  request.get_json()
    # Getting back the email of the student
    email = content["email"]
    # Querying list of courses by student email.
    courses = Student.query.filter_by(email=email).all()
    results = [
        {
            "course": c.course
        }
    for c in courses]
    return jsonify(courses = results)


@app.route("/studentInfo")
# Route to show a specified student info.
def get_student_info():
    # Parsing inputted json.
    content =  request.get_json()
    # Getting email of the student
    email = content["email"]
    # Querying the student.
    info = Student.query.filter_by(email= email).first()
    # Returning firstname, lastname, and email of the student.
    return jsonify(firstName = info.firstName, lastName = info.lastName, email= info.email)

@app.route("/professors")
# Route to show all students in the app database.
def show_professors():
    professors = Professor.query.all()
    # Querying all professor in app database.
    professor_list = []
    for professor in professors:
        # Listing the id, firstname, lastname, email, and course of each professor.
        prof = {'id': professor.id, 'firstname': professor.firstName, 'lastname': professor.lastName, 'professorId': professor.professorId, 'email': professor.email}
        professor_list.append(prof)
    return jsonify(professors = professor_list)


@app.route("/courses")
# Route to show all courses in the app database.
def show_courses():
    # Querying all courses
    courses = Course.query.all()
    course_list = []
    for course in courses:
        # Listing the id, course name, zoom link, and course id of each course.
        cour= {'id': course.id, 'coursename': course.courseName, 'zoomLink': course.zoomLink, 'courseId': course.courseId}
        course_list.append(cour)
    return jsonify(courses = course_list)