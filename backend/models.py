from backend import db

class Student(db.Model):
	__tablename__ = 'students'
	id = db.Column(db.Integer(), primary_key=True)
	firstname = db.Column(db.String())
	lastname = db.Column(db.String())

db.create_all()