const axios = require("axios");

const baseurl = "http://localhost:5000";

const students = axios
  .get(baseurl + "/students")
  .then((data) => {
    const students = data.data;
    students.forEach((s) => {
      console.log(s.courses);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

const professors = axios
  .get(baseurl + "/professors")
  .then((data) => {
    console.log(data.data);
  })
  .catch((err) => {
    console.log(err.message);
  });

const courses = axios
  .get(baseurl + "/courses")
  .then((data) => {
    console.log(data.data);
    const students = data.data[1].students;
    students.forEach((student) => {
      console.log(student);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

const t = {
  lectures: {
    date: {
      day: 1,
      month: 10,
      year: 2021,
    },

    inPerson: false,
    zoomLink: "zoom.link",
  },
};
// const courses =
//     axios.get(baseurl+"/courses")
//         .then(data => {
//             console.log(data.data)
//         })
//         .catch((err) => {
//             console.log(err.message);
//         });
