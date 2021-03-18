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

const getStudentByEmail = async (email) => {
  const response = await axios({method: 'post', url: "/getStudent", data: {email: email}})
  return response.data;
};

const createStudent = async (email, firstName, lastName) => {
  const response = await axios({method: 'post', url: "/students", data: {email: email, firstName: firstName, lastName: lastName}})
  return response.data;
};

const deleteStudent = async (email) => {
  const response = await axios({method: 'delete', url: "/students", data: {email: email} })
  return response.data;
};

const getProfessors = () => {
  return axios.get("/professor");
};

const getProfessorByEmail = async (email) => {
  const response = await axios({method: 'post', url: "/getProfessor", data: {email: email}})
  return response.data;
};

const createProfessor = async (email, firstName, lastName) => {
  const response = await axios({method: 'post', url: "/professors", data: {email: email, firstName: firstName, lastName: lastName}})
  return response.data;
};

const deleteProfessor = async (email) => {
  const response = await axios({method: 'delete', url: "/professors", data: {email: email} })
  return response.data;
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
  getStudentByEmail,
  createStudent,
  deleteStudent,
  getProfessors,
  getProfessorByEmail,
  createProfessor,
  deleteProfessor,
  getCourses,
  getLectures,
  getLabs
};
