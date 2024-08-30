import axiosInstance from "../api/axiosInstance";

export const login = async (username, password) => {
    try {
        const res = await axiosInstance.post("/users/login", { username, password });
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const register = async (username, password) => {
    try {
        const res = await axiosInstance.post("/users/register", { username, password });
        return res.data;
    } catch (err) {
        throw err;
    }
}