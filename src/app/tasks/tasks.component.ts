import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type Task } from './tasks.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u2',
      title: 'Learning Javascript whit Angular 17',
      summary: 'Allways is funny learn a new language',
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
  get selectedUserTasks() {
    return this.tasks.filter((task: Task) => task.userId === this.userId);
  }
  completeTask(id: string) {
    this.tasks = this.tasks.filter((task: Task) => task.id !== id);
  }
}
