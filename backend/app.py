from flask import Flask, jsonify, request, json, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects import postgresql
from sqlalchemy.dialects.postgresql import ARRAY
import os

app = Flask(__name__, static_folder="templates/static", template_folder="templates")
port = int(os.environ.get("PORT", 5000))
app.config["SQLALCHEMY_DATABASE_URI"] = 'postgresql://ezolcxxoztzkwe:700b5cc4219e52a1476fb954dc9b78f553bfbc7ba438b6ead4bfc00d26404763@ec2-3-222-127-167.compute-1.amazonaws.com:5432/d42frj072ftbkq'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

class Student(db.Model):
    # Database model for student table. 
    __tablename__ = 'student'
    id = db.Column(db.String())
    firstname = db.Column(db.String())
    lastname = db.Column(db.String())
    email = db.Column(db.String(), primary_key=True)
    courses = db.Column(postgresql.ARRAY(db.String()))

class Course(db.Model):
    # Database model for Course table. 
    __tablename__ = 'course'
    id = db.Column(db.String(), primary_key=True)
    coursename = db.Column(db.String())
    zoomlink = db.Column(db.String())
    lecturedates = db.Column(postgresql.ARRAY(db.String()))


db.create_all()

@app.route('/')
def hello():
    # return render_template('index.html')
    return {'greeting': "Hello World"}

@app.route("/students")
# Route to show all students in the app database.
def show_students():
    # Querying all students in the database.
    students = Student.query.all()
    student_list = []
    for student in students:
        # Listing the id, firstname, lastname, email, and course of each student.
        stud = {'id': student.id, 'firstname': student.firstname, 'lastname': student.lastname, 'email': student.email, 'courses':student.courses}
        student_list.append(stud)
    return jsonify(students = student_list)

@app.route("/studentCourses", methods= ['POST'])
# Route to list all courses that a student is taking. 
def get_student_courses():
    # Parsing inputted json.
    content =  request.get_json()
    # Getting back the email of the student
    email = content["email"]
    # Querying list of courses by student email.
    student = Student.query.filter_by(email=email).first()
    results = [
        {
            "course": c
        }
    for c in student.courses]
    return jsonify(courses = results)


@app.route("/studentInfo", methods= ['POST'])
# Route to show a specified student info.
def get_student_info():
    # Parsing inputted json.
    content =  request.get_json()
    # Getting email of the student
    email = content["email"]
    # Querying the student.
    info = Student.query.filter_by(email= email).first()
    # Returning firstname, lastname, and email of the student.
    return jsonify(firstName = info.firstname, lastName = info.lastname, email= info.email, courses = info.courses)


@app.route("/courses")
# Route to show all courses in the app database.
def show_courses():
    # Querying all courses
    courses = Course.query.all()
    course_list = []
    for course in courses:
        # Listing the id, course name, zoom link, and course id of each course.
        c= {'id': course.id, 'coursename': course.coursename, 'lecturedates': course.lecturedates, 'zoomlink': course.zoomlink}
        course_list.append(c)
    return jsonify(courses = course_list)

@app.route("/courseLectures", methods= ['POST'])
# Route to list all lecture dates of a course. 
def get_lecture_dates():
    # Parsing inputted json.
    content =  request.get_json()
    # Getting back course id of a course
    courseid = content["id"]
    # Querying list of lectures of a course.
    course = Course.query.filter_by(id=courseid).first()
    results = [
        {
            "date": l
        }
    for l in course.lecturedates]
    return jsonify(dates = results)

@app.route("/courseLecturesName", methods= ['POST'])
# Route to list all lecture dates of a course. 
def get_lecture_date_from_name():
    # Parsing inputted json.
    content =  request.get_json()
    # Getting back course id of a course
    coursename = content["coursename"]
    # Querying list of lectures of a course.
    course = Course.query.filter_by(coursename=coursename).first()
    results = [
        {
            "date": l
        }
    for l in course.lecturedates]
    return jsonify(dates = results)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=port)