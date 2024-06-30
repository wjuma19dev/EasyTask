import { Component, Input, OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type Task } from './tasks.model';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent implements OnInit {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;
  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u2',
      title: 'Learning Javascript whit Angular 17',
      summary: 'Always is funny learn a new language',
      timestamp: '2022-03-19',
    },
    {
      id: 't2',
      userId: 'u7',
      title: 'Banar a Loky y a Kimbo',
      summary:
        'Buscar los perros para banarlos y secarlos para que esten limpios',
      timestamp: '2022-03-19',
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Lavar el carro',
      summary: 'Llevar el carro al carwash para limpiarlo y cedarlo',
      timestamp: '2022-03-19',
    },
  ];
  ngOnInit(): void {}
  get selectedUserTasks() {
    return this.tasks.filter((task: Task) => task.userId === this.userId);
  }
  completeTask(id: string) {
    this.tasks = this.tasks.filter((task: Task) => task.id !== id);
  }
  onAddTaks() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTaskEvent(newTask: {
    title: string;
    summary: string;
    timestamp: string;
  }) {
    const task = {
      ...newTask,
      id: `t${this.tasks.length + 1}`,
      userId: this.userId,
    };
    this.tasks.push(task);
    this.isAddingTask = false;
  }
}
