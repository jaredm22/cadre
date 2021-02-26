import axios from 'axios'

const getHello = () => {
    return axios.get("/students")
}


export default getHello