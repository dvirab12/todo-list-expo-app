import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://172.16.0.2:3000/api",
    timeout: 1000,  
    headers: {"Content-Type": "application/json"}
});

export default axiosInstance;