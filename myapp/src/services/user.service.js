import axios from "axios"
import authHeader from "./auth-header"

const API_URL = "http://localhost:5000/api/"

const create = (info, request, data) => {
    return axios.post( `${API_URL}${request}`, data, { headers: authHeader() })
    .then((res) => {
      if (res.data) {
        console.log(res.data)
        alert(`${info} registrated.`)
        window.location.href = "/home"
      }
      return res.data
    }).catch((error) => {
      console.error(error)
      alert(`A problem occurred in the registration, try again later.`)
      window.location.href = "/home"
  })
}



// eslint-disable-next-line
export default {
  create,
};
