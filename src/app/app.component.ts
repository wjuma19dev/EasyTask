import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { headerComponent } from './header/header.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId!: string;

  title = 'essentials-components';

  get getSelectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onUserSelected(id: string) {
    this.selectedUserId = id;
  }
}
