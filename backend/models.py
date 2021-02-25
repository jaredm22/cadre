from backend import db

class Student(db.Model):
	__tablename__ = 'student'
	id = db.Column(db.Integer(), primary_key=True)
	studentId = db.Column(db.Integer())
	firstName = db.Column(db.String())
	lastName = db.Column(db.String())
	email = db.Column(db.String())
	course = db.Column(db.String())

class Professor(db.Model):
	__tablename__ = "Professor"
	id = db.Column(db.Integer(), primary_key=True)
	professorId = db.Column(db.Integer())
	firstName = db.Column(db.String())
	lastName = db.Column(db.String())
	email = db.Column(db.String())

class Course(db.Model):
	__tablename__ = "Course"
	id = db.Column(db.Integer(), primary_key=True)
	courseId = db.Column(db.Integer())
	courseName = db.Column(db.String())
	zoomLink = db.Column(db.String())


db.create_all()