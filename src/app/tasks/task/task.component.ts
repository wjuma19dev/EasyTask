import { Component, Input, output } from '@angular/core';
import { type Task } from '../tasks.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
