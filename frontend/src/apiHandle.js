import axios from 'axios'

const getHello = () => {
    return axios.get("/api")
}


export default getHello