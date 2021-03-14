import axios from 'axios'

var config = { headers: {  
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'}
}

const getStudents = () => {
    return axios.get("/students")
};

const getCourses = () => {
    return axios.get('/courses', config)
};

const getStudentCourses = (mail) => {
    return axios.post('/studentCourses', 
        {
            "email": mail
        }
      , config)
};

const getLectureDates = (name) => {
    return axios.post('/courseLecturesName', 
        {
            "coursename": name
        }
      , config).then(res => res)
};




export default {
    getStudents,
    getStudentCourses,
    getCourses,
    getLectureDates

}