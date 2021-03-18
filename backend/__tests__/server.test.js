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
