import { Component } from '@angular/core';

import { HeaderComponent } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId ?: string;

  
  public get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  

  onSelectUser(id : string) {
    this.selectedUserId = id;
  }

}
