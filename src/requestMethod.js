import axios from "axios";

// const BASE_URL = "https://ecommerc-eba.herokuapp.com/api"
const BASE_URL = "https://yuba-ecommerce-api.onrender.com/api"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token: `Bearer ${TOKEN}`}
})

