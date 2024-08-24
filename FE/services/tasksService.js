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

export const AddNewTask = async() => {
    try {
        const res = await axiosInstance.
            post(`/tasks/`);
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const editTaskById = async(taskId) => {
    try {
        const res = await axiosInstance.
            post(`/tasks/${taskId}`);
        return res.data;
    } catch (err) {
        throw err;
    }
}