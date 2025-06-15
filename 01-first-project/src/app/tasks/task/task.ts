import { Component, Input, output, Output } from '@angular/core';
import { TaskInfo } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task !: TaskInfo;
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
