const { PrismaClient } = require("@prisma/client");
const express = require("express");
// const { graphqlExpress } = require('apollo-server-express')

const prisma = new PrismaClient();
const app = express();

const port = 5000;

app.use(express.json());

// Student Routes
app.get("/students", async (req, res) => {
  const students = await prisma.student.findMany({
    include: {
      courses: true,
    },
  });
  console.log(students);
  res.json(students);
});

// app.post('/students', async (req, res) => {
//     const courses = await prisma.course.create({
//         data :{

//         }
//     })
//     console.log(courses)
//     res.json(courses)
// });

// Professor Routes
app.get("/professors", async (req, res) => {
  const professors = await prisma.professor.findMany({
    include: {
      courses: true,
    },
  });
  console.log(professors);
  res.json(professors);
});

// app.post('/professors', async (req, res) => {
//     const professors = await prisma.professor.create({

//     })
//     console.log(professors)
//     res.json(professors)
// });

// Course Routes

app.get("/courses", async (req, res) => {
  const courses = await prisma.course.findMany({
    include: {
      professor: true,
      students: true,
    },
  });
  console.log(courses);
  res.json(courses);
});

// app.post('/courses', async (req, res) => {
//     const courses = await prisma.course.create({

//     })
//     console.log(courses)
//     res.json(courses)
// });

const server = app.listen(port, () =>
  console.log(`🚀 Server ready at: http://localhost:${port}`)
);
