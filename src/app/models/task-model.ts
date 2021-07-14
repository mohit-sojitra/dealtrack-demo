export interface TaskCategory {
  name: string;
  description: string;
  tasks: Tasks[];
}

export interface Tasks {
  taskTemplate: string;
  description: string;
}
