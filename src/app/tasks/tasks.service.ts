import { Injectable } from '@angular/core';
import { Task } from './tasks.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
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
  find() {
    return this.tasks;
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task: Task) => task.userId === userId);
  }
  save(task: Task) {
    this.tasks.unshift(task);
  }
  delete(id: string) {
    this.tasks = this.tasks.filter((task: Task) => task.id !== id);
  }
}
