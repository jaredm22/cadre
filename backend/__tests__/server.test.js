const app = require("../index");
const supertest = require("supertest");
const request = supertest(app);

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
    .send({ email: "mlin@bu.edu" });
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

it("gets one lecture based on course id and lecture date", async (done) => {
  const response = await request
    .post("/getLecture")
    .send({ courseId: 1, lectureDate: "2021-03-22" });
  expect(response.status).toBe(200);
  expect(response.body.courseId).toBe(1);
  expect(response.body.lectureDate).toBe("2021-03-22");
  done();
});

it("creates student entry", (done) => {
  const response = request
    .post("/students")
    .send({ email: "test@bu.edu", firstName: "test", lastName: "guy" });
  expect(response.status).toBe(200);
  expect(response.body.firstName).toBe("test");
  expect(response.body.lastName).toBe("guy");
  done();
});

it("creates professor entry", (done) => {
  const response = request
    .post("/professors")
    .send({ email: "test@bu.edu", firstName: "test", lastName: "guy" });
  expect(response.status).toBe(200);
  expect(response.body.firstName).toBe("test");
  expect(response.body.lastName).toBe("guy");
  done();
});

it("deletes student entry by email", (done) => {
  const response = request
    .delete("/students")
    .send({ email: "test@bu.edu" });
  expect(response.status).toBe(200);
  expect(response.body.firstName).toBe("test");
  expect(response.body.lastName).toBe("guy");
  done();
});

it("deletes professor entry by email", (done) => {
  const response = request
    .delete("/professors")
    .send({ email: "test@bu.edu" });
  expect(response.status).toBe(200);
  expect(response.body.firstName).toBe("test");
  expect(response.body.lastName).toBe("guy");
  done();
});
