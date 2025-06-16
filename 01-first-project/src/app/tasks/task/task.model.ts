export interface TaskInfo {
  id : string;
  userId : string;
  title: string;
  summary: string;
  dueDate : string;
}

export interface NewTaskInfo {
  title: string;
  summary: string;
  date : string;
}