import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  addUser(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  adduser(userdata: { username: string; mail: string; gender: string }): Observable<User> {
    const user: Omit<User, 'id'> = {
      name: userdata.username,
      email: userdata.mail,
      gender: userdata.gender
    };

    return this.addUser(user);
  }

  updateUser(id: number, user: Omit<User, 'id'>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  updateuser(id: number, userdata: { username: string; mail: string; gender: string }): Observable<User> {
    const user: Omit<User, 'id'> = {
      name: userdata.username,
      email: userdata.mail,
      gender: userdata.gender
    };

    return this.updateUser(id, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
