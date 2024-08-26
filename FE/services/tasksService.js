import axios from "axios";
import axiosInstance from "../api/axiosInstance";


export const getTasks = async () => {
    const Tasks = await axios.get('http://172.20.10.2:3000/tasks');
    return Tasks.data
}
export const getAllTasks = async() => {
    try {
        const res = await axiosInstance.get('/tasks');
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const deleteTaskById = async(taskId) => {
    try {
        const res = await axiosInstance.
            delete(`/tasks/${taskId}`);
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const addNewTask = async(task) => {
    try {
        const res = await axios.
            post(`http://172.20.10.2:3000/tasks/`, task);
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const updateTaskById = async(taskId, task) => {
    try {
        const res = await axiosInstance.
            post(`/tasks/${taskId}`, task);
        return res.data;
    } catch (err) {
        throw err;
    }
}