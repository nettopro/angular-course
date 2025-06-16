import { Component, EventEmitter, output, Output, input } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { NewTaskInfo } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  //Accepts undefined value 
  //(is not strictly string in this case)
  readonly name = input.required<string>(); 
  //Same thing below but written more verbosely
  //@Input() name : string | undefined;
  readonly userId = input.required<string>();
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  public get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }
  
  onCompleteTask(id: string) {

  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
