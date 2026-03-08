import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getTasks = () => api.get("/tasks");

export const addTask = (task) => api.post("/tasks", task);

export const deleteTask = (id) => api.delete(`/tasks/${id}`);

export const updateTask = (id, updatedTask) =>
  api.put(`/tasks/${id}`, updatedTask);