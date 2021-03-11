import pytest
import json
from app import *

@pytest.fixture
def test_app():
    "Configuration of the test test_app"
    test_app = app.test_client()
    return test_app

def test_api_route(test_app):
    "Testing the api route"
    res = test_app.get("/api")
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["greeting"] == "Hello World"

def test_show_all_students(test_app):
    res = test_app.get("/students")
    "Testing to check if student route returns all students"
    assert res.status_code == 200
    data = json.loads(res.data)
    assert len(data["students"]) >= 1

def test_show_all_professors(test_app):
    "Testing to check if student route returns all professors"
    res = test_app.get("/professors")
    assert res.status_code == 200
    data = json.loads(res.data)
    assert len(data["professors"]) >= 1

def test_show_all_courses(test_app):
    "Testing to check if student route returns all courses"
    res = test_app.get("/courses")
    assert res.status_code == 200
    data = json.loads(res.data)
    assert len(data["courses"]) >= 1

def test_show_student_info(test_app):
    "Testing to check if student route returns info of specified students"
    res = test_app.post("/studentInfo", data=json.dumps({'email':'mlin2022@bu.edu'}), content_type='application/json')
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["firstName"] == "Melissa"
    assert data["lastName"] == "Lin"
