export interface Task {
  id: number;
  title: string;
  subtitle?: string;
  body: string;
}

export interface CreateTaskDto {
  title: string;
  subtitle?: string;
  body: string;
}
