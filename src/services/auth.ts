import api from "./api";

const AUTH_PATH = 'auth';

export async function login(email: string, password: string) {
  const response = await api.post(`/${AUTH_PATH}/login`, { email, password });
  return response.data;
}