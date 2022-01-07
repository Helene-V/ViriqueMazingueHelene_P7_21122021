import axios from "axios";
  let user = JSON.parse(localStorage.getItem('user'));

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer" + localStorage.getItem('token')
  }
});

// Authorization: 'Bearer ' + user.accessToken 
// Authorization: localStorage.getItem('token')
// Authorization: "Bearer" + localStorage.getItem('token')