import api from "./api";

// const TASK_PATH = 'tasks';

export async function getTasks(name: string, email: string, password: string) {
  const response = await api.get(`/tasks`, { });
  return response.data;
}

export async function createTasks(name: string, email: string, password: string) {
  const response = await api.post(`/tasks`, { });
  return response.data;
}