import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API = environment.API;

  constructor(private httpClient: HttpClient) { }

  registerUser(user: User): Observable<any> {
    return this.httpClient.post(this.API + 'register', user);
  }

  loginUser(user: User): Observable<any> {
    return this.httpClient.post(this.API + 'login', user);
  }

  logoutUser():Observable<any> {
    return this.httpClient.post(this.API + 'logout', '');
  }

  setToken(userDetails) {
    localStorage.setItem('token', userDetails.token);
  }

  clearToken() {
    localStorage.clear();
  }
}
