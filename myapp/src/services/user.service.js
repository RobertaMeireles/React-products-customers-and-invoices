import axios from "axios"
import authHeader from "./auth-header"

const API_URL = "http://localhost:5000/api/"

const getAll = (request) => {
  return axios.get( `${API_URL}${request}`, { headers: authHeader() })
}

const getId = (request) => {
  return axios.get( `${API_URL}${request}`, { headers: authHeader() })
}

const create = (request, data) => {
  return axios.post( `${API_URL}${request}`, data, { headers: authHeader() })
}

const update = (request, data) => {
  return axios.put(`${API_URL}${request}`, data, { headers: authHeader() })
}

const deleteId = (request, data) => {
  return axios.put(`${API_URL}${request}`, data, { headers: authHeader() })
}

// eslint-disable-next-line
export default {
  create,
  getAll,
  getId,
  update,
  deleteId,
}
