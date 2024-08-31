import axiosInstance from "../api/axiosInstance";


export const getAllTasks = async(userId) => {
    try {
        const res = await axiosInstance.get('/tasks',{
            headers: { 'Authorization': `Bearer ${userId}` }
        });
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const deleteTaskById = async(userId, taskId) => {
    try {
        const res = await axiosInstance.delete(`/tasks/${taskId}`, {
            headers: { 'Authorization': `Bearer ${userId}` }
        });
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const addNewTask = async(userId ,task) => {
    try {
        const res = await axiosInstance.post(`tasks`, task, {
            headers: { 'Authorization': `Bearer ${userId}` }
        });
        return res.data;
    } catch (err) {
        console.error('Error adding new task:', err);
        throw err;
    }
}

export const updateTaskById = async(userId, task) => {
    try {
        const res = await axiosInstance.post(`/tasks/${task._id}`, task, {
            headers: { 'Authorization': `Bearer ${userId}` }
        });
        return res.data;
    } catch (err) {
        throw err;
    }
}