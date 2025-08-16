import axios, { AxiosInstance } from "axios"

const pistonBaseUrl = "https://emkc.org/api/v2/piston"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const instance: AxiosInstance = axios.create({
    baseURL: pistonBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance
