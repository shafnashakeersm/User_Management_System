import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent {
  users: User[] = [];
  name = '';
  role = '';
  selectedRole = '';
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
    return this.selectedRole
      ? this.users.filter(user => user.role === this.selectedRole)
      : this.users;
  }
}
