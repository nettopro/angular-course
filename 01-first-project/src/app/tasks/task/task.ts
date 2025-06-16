import { Component, Input, output, Output } from '@angular/core';
import { TaskInfo } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
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
