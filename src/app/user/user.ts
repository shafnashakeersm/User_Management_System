import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import { IfAdminDirective } from '../directives/if-admin.directive';

interface User {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HoverHighlightDirective,
    IfAdminDirective
  ],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent {
  users: User[] = [];
  name = '';
  role = '';
  idCounter = 1;

  addUser() {
    if (this.name && this.role) {
      this.users.push({
        id: this.idCounter++,
        name: this.name,
        role: this.role
      });
      this.name = '';
      this.role = '';
    }
  }

  removeUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  get filteredUsers(): User[] {
    return this.users;
  }
}
