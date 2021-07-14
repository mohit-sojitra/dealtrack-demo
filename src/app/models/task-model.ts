export interface TaskCategory {
  name: string;
  description: string;
  tasks: Tasks[];
  isTaskVisible:boolean;
}

export interface Tasks {
  taskTemplate: string;
  description: string;
}
