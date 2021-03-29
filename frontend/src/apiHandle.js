import axios from "axios";

// var config = {
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
// };

const getStudents = async () => {
  const response = await axios.get("/students");
  return response.data;
};

const getStudentByEmail = async (email) => {
  const response = await axios({
    method: "post",
    url: "/getStudent",
    data: { email: email },
  });
  return response.data;
};

const createStudent = async (email, firstName, lastName) => {
  const response = await axios({
    method: "post",
    url: "/students",
    data: { email: email, firstName: firstName, lastName: lastName },
  });
  return response.data;
};

const deleteStudent = async (email) => {
  const response = await axios({
    method: "delete",
    url: "/students",
    data: { email: email },
  });
  return response.data;
};

const getProfessors = async () => {
  const response = await axios.get("/professor");
  return response.data;
};

const getProfessorByEmail = async (email) => {
  const response = await axios({
    method: "post",
    url: "/getProfessor",
    data: { email: email },
  });
  return response.data;
};

const createProfessor = async (email, firstName, lastName) => {
  const response = await axios({
    method: "post",
    url: "/professors",
    data: { email: email, firstName: firstName, lastName: lastName },
  });
  return response.data;
};

const deleteProfessor = async (email) => {
  const response = await axios({
    method: "delete",
    url: "/professors",
    data: { email: email },
  });
  return response.data;
};

const getCourses = async () => {
  const response = await axios.get("/courses");
  return response.data;
};

const createCourse = async (
  courseId,
  courseName,
  section,
  school,
  zoomLink,
  days,
  startDate,
  endDate,
  startTime,
  endTime,
  lectureStyle
) => {
  const response = await axios({
    method: "post",
    url: "/courses",
    data: {
      courseId: courseId,
      courseName: courseName,
      section: section,
      school: school,
      zoomLink: zoomLink,
      days: days,
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      endTime: endTime,
      lectureStyle: lectureStyle,
    },
  });
  return response.data;
};

const createCourseStudent = async (
  courseId,
  courseName,
  section,
  school,
  zoomLink,
  days,
  startDate,
  endDate,
  startTime,
  endTime,
  lectureStyle,
  studentId
) => {
  const response = await axios({
    method: "post",
    url: "/addCourseStudent",
    data: {
      courseId: courseId,
      courseName: courseName,
      section: section,
      school: school,
      zoomLink: zoomLink,
      days: days,
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      endTime: endTime,
      lectureStyle: lectureStyle,
      studentId: studentId,
    },
  });
  return response.data;
};

const getLectures = async () => {
  const response = await axios.get("/lectures");
  return response.data;
};

const getModifiedLecture = async (courseId, date) => {
  const response = await axios({
    method: "post",
    url: "/getLecture",
    data: { courseId: courseId, lectureDate: date },
  });
  return response.data;
};

const getLabs = async () => {
  const response = await axios.get("/labs");
  return response.data;
};

const createAssignment = async (
  courseId,
  name,
  assignmentType,
  assignedDate,
  assignedTime,
  dueDate,
  dueTime,
  tags
) => {
  const response = await axios({
    method: "post",
    url: "/courses",
    data: {
      courseId,
      name,
      assignmentType,
      assignedDate,
      assignedTime,
      dueDate,
      dueTime,
      tags,
    },
  });
  return response.data;
};

export default {
  getStudents,
  getStudentByEmail,
  createStudent,
  createCourseStudent,
  deleteStudent,
  getProfessors,
  getProfessorByEmail,
  createProfessor,
  deleteProfessor,
  getCourses,
  createCourse,
  getLectures,
  getModifiedLecture,
  getLabs,
  createAssignment,
};
