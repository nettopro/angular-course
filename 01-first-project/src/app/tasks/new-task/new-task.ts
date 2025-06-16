import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskInfo } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  readonly userId = input.required<string>();
  close = output<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);
  
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId()
    );
    this.close.emit();
  }
}
