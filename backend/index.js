// polyfill globalThis for older nodes
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
      courses: {
        include: {
          labs: true,
          lectures: true,
          students: true,
          professor: true
        }
      },
      labs: {
        include: {
          course: true 
        }
      }
    },
  });

  console.log(student);
  res.json(student);
});

// Student post route
app.post('/students', async (req, res) => {
  const {email, firstName, lastName} = req.body;
  const post = await prisma.student.create({
      data :{
        email,
        firstName,
        lastName
      }
  })
  console.log(post)
});

// Student delete route
app.delete('/students', async (req, res) => {
  const email = req.body.email;
  const post = await prisma.student.delete({
    where: {
      email: email
    }
  })
  console.log(post)
});




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
      courses: {
        include: {
          labs: true,
          lectures: true,
          students: true,
          professor: true
        }
      },
      labs: {
        include: {
          course: true 
        }
      }
    },
  });
  console.log(professor);
  res.json(professor);
});

// Professors post route
app.post('/professors', async (req, res) => {
  const {email, firstName, lastName} = req.body;
  const post = await prisma.professor.create({
      data :{
        email,
        firstName,
        lastName
      }
  })
  console.log(post)
});

// Professor delete route
app.delete('/professors', async (req, res) => {
  const email = req.body.email;
  const post = await prisma.professor.delete({
      where: {
        email: email
      }
  })
  console.log(post)
});


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

app.post('/courses', async (req, res) => {
    const {courseId, courseName, section, school, days, lectureStyle, startDate, endDate, startTime, endTime} = req.body
    const courses = await prisma.course.create({
      courseId,
      courseName,
      section, 
      school, 
      days,
      lectureStyle,
      startDate,
      endDate,
      startTime,
      endTime
    })
    console.log(courses)
    res.json(courses)
});

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

// Get one lecture based on date and courseId
app.post("/getLecture", async (req, res) => {
  const { courseId, lectureDate } = req.body;
  const lecture = await prisma.lecture.findUnique({
    where: {
      lecture_courseId_lectureDate: {
        courseId: courseId,
        lectureDate: lectureDate
      }
    }
  });
  console.log(lecture);
  res.json(lecture);
});



const server = app.listen(process.env.PORT || port, () =>
  console.log(`🚀 Server ready at: http://localhost:${port}`)
);

module.exports = server;
