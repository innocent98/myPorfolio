import axios from "axios";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;

export const userRequest = axios.create({
    baseURL: 'http://192.168.1.79:8400/api/',
    // headers: { token: `Bearer ${TOKEN}` },
  });