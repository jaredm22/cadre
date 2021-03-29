const app = require("../index");
const supertest = require("supertest");
const request = supertest(app);

beforeEach(async () => {
  jest.setTimeout(10000);
});

it("gets the main endpoint", async (done) => {
  const response = await request.get("/");
  expect(response.status).toBe(200);
  done();
});

it("gets students endpoint", async (done) => {
  const response = await request.get("/students");
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  done();
});

it("gets professors endpoint", async (done) => {
  const response = await request.get("/professors");
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  done();
});

it("gets courses endpoint", async (done) => {
  const response = await request.get("/courses");
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  done();
});

it("gets labs endpoint", async (done) => {
  const response = await request.get("/labs");
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  done();
});

it("gets lectures endpoint", async (done) => {
  const response = await request.get("/lectures");
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  done();
});

it("gets one student based on email", async (done) => {
  const response = await request
    .post("/getStudent")
    .send({ email: "mlin2022@bu.edu" });
  expect(response.status).toBe(200);
  expect(response.body.firstName).toBe("Melissa");
  expect(response.body.lastName).toBe("Lin");
  expect(Array.isArray(response.body.courses)).toBeTruthy();
  expect(Array.isArray(response.body.labs)).toBeTruthy();
  done();
});

it("gets one professor based on email", async (done) => {
  const response = await request
    .post("/getProfessor")
    .send({ email: "dsullivan@bu.edu" });
  expect(response.status).toBe(200);
  expect(response.body.firstName).toBe("Dave");
  expect(response.body.lastName).toBe("Sullivan");
  expect(Array.isArray(response.body.courses)).toBeTruthy();
  expect(Array.isArray(response.body.labs)).toBeTruthy();
  done();
});

it("gets one course based on course id and course name, and section", async (done) => {
  const response = await request.post("/getCourse").send({
    courseId: "CS111",
    courseName: "Intro to Computer Science",
    section: "A1",
  });
  expect(response.status).toBe(200);
  expect(response.body.id).toBe(1);
  expect(response.body.school).toBe("College of Arts and Sciences");
  done();
});

it("gets one lecture based on course id and lecture date", async (done) => {
  const response = await request
    .post("/getLecture")
    .send({ courseId: 1, lectureDate: "2021-03-22" });
  expect(response.status).toBe(200);
  expect(response.body.courseId).toBe(1);
  expect(response.body.lectureDate).toBe("2021-03-22");
  done();
});

it("creates student entry", async (done) => {
  const response = await request
    .post("/students")
    .send({ email: "test@bu.edu", firstName: "test", lastName: "guy" });
  const check = await request
    .post("/getStudent")
    .send({ email: "test@bu.edu" });
  expect(check.status).toBe(200);
  expect(check.body.firstName).toBe("test");
  expect(check.body.lastName).toBe("guy");
  done();
});

it("creates professor entry", async (done) => {
  const response = await request
    .post("/professors")
    .send({ email: "test@bu.edu", firstName: "test", lastName: "guy" });
  const check = await request
    .post("/getProfessor")
    .send({ email: "test@bu.edu" });
  expect(check.status).toBe(200);
  expect(check.body.firstName).toBe("test");
  expect(check.body.lastName).toBe("guy");
  done();
});

it("deletes student entry by email", async (done) => {
  const response = await request
    .delete("/students")
    .send({ email: "test@bu.edu" });
  const check = await request
    .post("/getStudent")
    .send({ email: "test@bu.edu" });
  expect(check.status).toBe(200);
  expect(check.body).toBe(null);
  done();
});

it("deletes professor entry by email", async (done) => {
  const response = await request
    .delete("/professors")
    .send({ email: "test@bu.edu" });
  const check = await request
    .post("/getProfessor")
    .send({ email: "test@bu.edu" });
  expect(check.status).toBe(200);
  expect(check.body).toBe(null);
  done();
});

it("creates a lecture where zoom link and lecture style are changed", async (done) => {
  const response = await request.post("/changeLecture").send({
    courseId: 1,
    lectureDate: "2021-03-24",
    changeLectureStyle: true,
    lectureStyle: "Cancelled",
    changeZoomLink: true,
    zoomLink: "https://zoom.us",
    day: "Wednesday",
  });
  const check = await request
    .post("/getLecture")
    .send({ courseId: 1, lectureDate: "2021-03-24" });
  expect(check.status).toBe(200);
  expect(check.body.lectureStyle).toBe("Cancelled");
  done();
});

it("deletes lecture entry by courseId and date", async (done) => {
  const response = await request
    .delete("/changeLecture")
    .send({ courseId: 1, lectureDate: "2021-03-24" });
  const check = await request
    .post("/getLecture")
    .send({ courseId: 1, lectureDate: "2021-03-24" });
  expect(check.status).toBe(200);
  expect(check.body).toBe(null);
  done();
});

it("gets one assignment based on courseId and name", async (done) => {
  const response = await request
    .post("/getAssignment")
    .send({ courseId: 1, name: "Problem Set 1" });
  expect(response.status).toBe(200);
  expect(response.body.assignedDate).toBe("2021-01-25");
  done();
});

it("creates an assignment", async (done) => {
  const response = await request.post("/assignments").send({
    courseId: 1,
    name: "Problem Set 2",
    assignmentType: "Problem Set",
    assignedDate: "2021-01-25",
    assignedTime: "12:00",
    dueDate: "2021-01-25",
    dueTime: "12:00",
    tags: ["Ch.2"],
  });
  const check = await request.post("/getAssignment").send({
    courseId: 1,
    name: "Problem Set 2",
  });
  expect(check.status).toBe(200);
  expect(check.body.assignedDate).toBe("2021-01-25");
  expect(check.body.assignmentType).toBe("Problem Set");
  done();
});

it("deletes lecture entry by courseId and name", async (done) => {
  const response = await request
    .delete("/assignments")
    .send({ courseId: 1, name: "Problem Set 2" });
  const check = await request
    .post("/getAssignment")
    .send({ courseId: 1, name: "Problem Set 2" });
  expect(check.status).toBe(200);
  expect(check.body).toBe(null);
  done();
});
