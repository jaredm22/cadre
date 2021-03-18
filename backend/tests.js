const baseurl="http://localhost:5000"
const a = require("axios")

a.get(baseurl+"/students")
    .then(data => {
        console.log(data.data)
    })
    .catch((err) => {
        console.log(err.message);
    });

a.get(baseurl+"/professors")
    .then(data => {console.log(data.data)})
    .catch((err) => {
        console.log(err.message);
    });

a.get(baseurl+"/lectures")
    .then(data => {console.log(data.data)})
    .catch((err) => {
        console.log(err.message);
    });

a.get(baseurl+"/courses")
    .then(data => {console.log(data.data)})
    .catch((err) => {
        console.log(err.message);
    });

a.get(baseurl+"/labs")
    .then(data => {console.log(data.data)})
    .catch((err) => {
        console.log(err.message);
    });