import axios from "axios";

const BASE_URL = "https://ecommerc-eba.herokuapp.com/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTlmMDE4NDQwMjgxMzY0Zjc0MzU0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjkwNjA3MCwiZXhwIjoxNjYyOTkyNDcwfQ.vCWhva4-lCPz4MW25FseN5FKf8c813eju5e2WBsH5w0"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
})

