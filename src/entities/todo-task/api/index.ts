import ITask from "shared/types/ITask";
import api, { API_URL } from "shared/api";

export default class TaskService {
  static async getAllTasks() {
    try {
      const response = await api.get<ITask[]>(`${API_URL}/task`);
      return response.data as ITask[];
    }
    catch (error) {
      throw error
    }
  }

  static async getTaskById(id: string | number) {
    try {
      const response = await api.get<ITask>(`${API_URL}/task/${id}`);
      return response.data as ITask;
    }
    catch (error) {
      throw error
    }
  }

  static async createTask({ description, due_date, title}: { due_date: string, description: string, title: string }) {
    try {
      const response = await api.post<ITask>(`${API_URL}/task`, { title, description, due_date });
      return response.data as ITask;
    }
    catch (error) {
      throw error
    }
  }

  static async editTaskById(id: string | number, task: ITask) {
    try {
      const response = await api.put<ITask>(`${API_URL}/task/${id}`, { ...task });
      return response.data as ITask;
    }
    catch (error) {
      throw error
    }
  }

  static async deleteTaskById(id: string | number) {
    try {
      const response = await api.delete(`${API_URL}/task/${id}`);
      return response.data;
    }
    catch (error) {
      throw error
    }
  }
}