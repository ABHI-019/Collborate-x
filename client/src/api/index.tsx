import axios, { AxiosInstance } from "axios"

const pistonBaseUrl = "https://emkc.org/api/v2/piston"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

// Piston API instance for code execution
export const pistonInstance: AxiosInstance = axios.create({
    baseURL: pistonBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

// Backend API instance for your server
export const backendInstance: AxiosInstance = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
})

// Health check function for backend
export const checkBackendHealth = async () => {
    try {
        const response = await backendInstance.get('/health')
        return response.data
    } catch (error) {
        console.error('Backend health check failed:', error)
        throw error
    }
}

// Default export for backward compatibility
export default pistonInstance
