import axios from 'axios'

var config = { headers: {  
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'}
}

const getHello = () => {
    return axios.get("/students")
};

const getStudentCourses = (mail) => {
    return axios.post('/studentCourses', 
        {
            "email": mail
        }
      , config)
};


export default {
    getHello,
    getStudentCourses

}