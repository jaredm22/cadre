import axios from "axios";

// var config = {
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
// };

const getStudents = () => {
  return axios.get("/students");
};

const getProfessors = () => {
  return axios.get("/professor");
};

const getCourses = () => {
  return axios.get("/courses");
};

const getLectures = () => {
  return axios.get("/lectures");
};

const getLabs = () => {
  return axios.get("/labs");
};

export default {
  getStudents,
  getProfessors,
  getCourses,
  getLectures,
  getLabs
};
