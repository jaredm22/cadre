from backend import db

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