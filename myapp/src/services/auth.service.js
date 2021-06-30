import axios from "axios";

const API_URL = "http://localhost:5000/api";

const register = (email, password, nome) => {
  return axios
  .post(API_URL + "/auth/signup", {
    email,
    password,
    nome,
  })
  .then((res) => {
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  })
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/auth/login", {
        email,
        password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// eslint-disable-next-line
export default {
  register,
  login,
  logout,
  getCurrentUser,
};

// const login = (email, password) => {
//   return axios
//     .post(API_URL + "/auth/login", {
//         email,
//         password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }
//       return response.data;
//     })
// };