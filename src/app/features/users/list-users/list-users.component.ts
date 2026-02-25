import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: () => {
        this.users = [
          { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
          { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
          { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' }
        ];
        this.errorMessage = 'API indisponible (http://localhost:3000/users). Affichage des données de test.';
        this.isLoading = false;
      }
    });
  }

  deleteUser(id: number | undefined): void {
    if (id === undefined) {
      return;
    }

    this.userService.deleteUser(id).subscribe({
      next: () => {
        alert('This user is deleted successfully');
        this.ngOnInit();
      },
      error: () => {
        this.users = this.users.filter((user) => user.id !== id);
      }
    });
  }
}
