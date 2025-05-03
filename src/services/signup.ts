import api from "./api";

// const USERS_PATH = '/users';

export async function signup(name: string, email: string, password: string) {
  const response = await api.post(`/users`, { name, email, password });
  return response.data;
}