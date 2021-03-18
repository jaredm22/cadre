globalThis = global;
const { PrismaClient } = require("@prisma/client");
const path = require("path");
const express = require("express");
// const { graphqlExpress } = require('apollo-server-express')

const prisma = new PrismaClient();
const app = express();

const port = 5000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
//  app.use(express.static("public"));

app.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Student Routes
// Student get all route
app.get("/students", async (req, res) => {
  const students = await prisma.student.findMany({
    include: {
      courses: true,
      labs: true,
    },
  });
  console.log(students);
  res.json(students);
});

// Get one student route
app.post("/getStudent", async (req, res) => {
  const studentEmail = req.body.email;
  const student = await prisma.student.findUnique({
    where: {
      email: studentEmail,
    },
    include: {
      courses: true,
      labs: true,
    },
  });
  console.log(student);
  res.json(student);
});

// Student post route
// app.post('/student', async (req, res) => {
//   const {id, email, firstName, lastName, courses} = req.body;
//   const post = await prisma.student.create({
//       data :{
//         id,
//         email,
//         firstName,
//         lastName,
//         courses
//       }
//   })
//   res.json(courses)
// });

// Professor Routes
// Professor get all route
app.get("/professors", async (req, res) => {
  const professors = await prisma.professor.findMany({
    include: {
      courses: true,
      labs: true,
    },
  });
  console.log(professors);
  res.json(professors);
});

// Get one professor route
app.post("/getProfessor", async (req, res) => {
  const professorEmail = req.body.email;
  const professor = await prisma.professor.findUnique({
    where: {
      email: professorEmail,
    },
    include: {
      courses: true,
      labs: true,
    },
  });
  console.log(professor);
  res.json(professor);
});

// Professor post route
// app.post('/professor', async (req, res) => {
//     const {id, email, firstName, lastName, courses} = req.body
//     const post = await prisma.professor.create({
//       id,
//       email,
//       firstName,
//       lastName,
//       courses
//     })
//     res.json(post)
// });

// Course Routes
// Course get all route
app.get("/courses", async (req, res) => {
  const courses = await prisma.course.findMany({
    include: {
      professor: true,
      students: true,
      lectures: true,
      labs: true,
    },
  });
  console.log(courses);
  res.json(courses);
});

// app.post('/courses', async (req, res) => {
//     const {id, courseId, courseName, zoomLink, professors, days, lecture}
//     const courses = await prisma.course.create({

//     })
//     console.log(courses)
//     res.json(courses)
// });

// Lab Routes
// Lab get all route
app.get("/labs", async (req, res) => {
  const labs = await prisma.lab.findMany({
    include: {
      instructors: true,
      students: true,
      course: true,
    },
  });
  console.log(labs);
  res.json(labs);
});

// Lecture Routes
// Lecture get all route
app.get("/lectures", async (req, res) => {
  const lectures = await prisma.lecture.findMany({
    include: {
      course: true,
    },
  });
  console.log(lectures);
  res.json(lectures);
});

const server = app.listen(process.env.PORT || port, () =>
  console.log(`🚀 Server ready at: http://localhost:${port}`)
);

module.exports = server;
