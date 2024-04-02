import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/app.user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private apiUrl: string = 'http://your-api-url.com/users';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }
}
