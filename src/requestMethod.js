import axios from "axios";

const BASE_URL = "https://ecommerc-eba.herokuapp.com/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTlmMDE4NDQwMjgxMzY0Zjc0MzU0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mjc5ODE0NCwiZXhwIjoxNjYyODg0NTQ0fQ.oxx3JA4dHknBj3c8JZwTwGkIf11AchAOI3LG9QHn4M0"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
})

