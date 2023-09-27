// Allows you to make requests to the content of an HTTP link
import axios from "axios";

// Instance url
const tasksApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1/tasks/",
});

export const getAllTasks = () => {
  return tasksApi.get("/");
};

export const getTask = (id) => {
  return tasksApi.get(`/${id}/`);
};

export const createTask = (task) => {
  return tasksApi.post("/", task);
};

export const deleteTask = (id) => {
  // Interpolate id to delete task
  return tasksApi.delete(`/${id}`);
};

export const updateTask = (id, task) => {
  return tasksApi.put(`/${id}/`, task);
};
