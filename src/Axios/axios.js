import axios from "axios";
import env from 'react-dotenv'
const API = axios.create({
  baseURL: "https://nobelium-0vvw.onrender.com/",
});

export default API;