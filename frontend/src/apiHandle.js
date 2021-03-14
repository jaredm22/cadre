import axios from "axios";

var config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

<<<<<<< HEAD
const getStudents = () => {
    return axios.get("/students")
=======
const getHello = () => {
  return axios.get("/students");
>>>>>>> b9c17ba1c9a92823cb8e270c6e457ce9d177e1f4
};

const getCourses = () => {
  return axios.get("/courses", config);
};

const getStudentCourses = (mail) => {
  return axios.post(
    "/studentCourses",
    {
      email: mail,
    },
    config
  );
};

const getLectureDates = (name) => {
  return axios
    .post(
      "/courseLecturesName",
      {
        coursename: name,
      },
      config
    )
    .then((res) => res);
};

export default {
<<<<<<< HEAD
    getStudents,
    getStudentCourses,
    getCourses,
    getLectureDates

}
=======
  getHello,
  getStudentCourses,
  getCourses,
  getLectureDates,
};
>>>>>>> b9c17ba1c9a92823cb8e270c6e457ce9d177e1f4
