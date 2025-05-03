import api from './api';
import { CreateTaskDto, Task } from '../types/tasks';

const TASK_PATH = '/tasks';

const TaskService = {
  getAll: async (): Promise<Task[]> => {
    const res = await api.get(TASK_PATH);
    return res.data;
  },

  create: async (data: CreateTaskDto): Promise<Task> => {
    const res = await api.post(TASK_PATH, data);
    return res.data;
  },

  update: async (id: number, data: CreateTaskDto): Promise<Task> => {
    const res = await api.put(`${TASK_PATH}/${id}`, data);
    return res.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`${TASK_PATH}/${id}`);
  },
};

export default TaskService;
