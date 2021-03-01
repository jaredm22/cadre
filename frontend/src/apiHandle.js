import axios from 'axios'

const getHello = () => {
    return axios.get("/students")
};

const getStudentCourses = (id) => {
    return axios.get("/studentCourses", {
        studentid: id})
};


export default {
    getHello,
    getStudentCourses

}