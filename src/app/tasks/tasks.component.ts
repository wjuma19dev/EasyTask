import { Component, Input, OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type NewTaskData, type Task } from './tasks.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }
  onCompleteTask(id: string) {
    this.taskService.delete(id);
  }
  onAddTaks() {
    this.isAddingTask = true;
  }
  onCancel() {
    this.isAddingTask = false;
  }
}
