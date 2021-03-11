from flask import Flask, jsonify, request, json, render_template
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__, static_folder="build/static", template_folder="build")
port = int(os.environ.get("PORT", 5000))
app.config["SQLALCHEMY_DATABASE_URI"] = 'postgresql://ezolcxxoztzkwe:700b5cc4219e52a1476fb954dc9b78f553bfbc7ba438b6ead4bfc00d26404763@ec2-3-222-127-167.compute-1.amazonaws.com:5432/d42frj072ftbkq'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

class Student(db.Model):
	# Database model for student table. 
	__tablename__ = 'student'
	id = db.Column(db.Integer(), primary_key=True)
	firstName = db.Column(db.String())
	lastName = db.Column(db.String())
	email = db.Column(db.String())
	course = db.Column(db.String())

class Professor(db.Model):
	# Database model for Professor table. 
	__tablename__ = "Professor"
	id = db.Column(db.Integer(), primary_key=True)
	professorId = db.Column(db.Integer())
	firstName = db.Column(db.String())
	lastName = db.Column(db.String())
	email = db.Column(db.String())

class Course(db.Model):
	# Database model for Course table. 
	__tablename__ = 'course'
	id = db.Column(db.Integer(), primary_key=True)
	courseId = db.Column(db.Integer())
	courseName = db.Column(db.String())
	lectureDate = db.Column(db.DateTime())


db.create_all()

@app.route('/')
def hello():
    return render_template('build/index.html')

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

@app.route("/studentCourses", methods= ['POST'])
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
        cour= {'id': course.id, 'coursename': course.courseName, 'lectureDate': course.lectureDate, 'courseId': course.courseId}
        course_list.append(cour)
    return jsonify(courses = course_list)

@app.route("/courseLectures", methods= ['POST'])
# Route to list all lecture dates of a course. 
def get_lecture_dates():
    # Parsing inputted json.
    content =  request.get_json()
    # Getting back course id of a course
    courseId = content["courseId"]
    # Querying list of lectures of a course.
    lectures = Course.query.filter_by(courseId=courseId).all()
    results = [
        {
            "date": l.lectureDate
        }
    for l in lectures]
    return jsonify(dates = results)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=port)