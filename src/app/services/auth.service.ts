import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../interfaces/user.model';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  NewUser: UserModel = {
    email: null,
    token: null,
  };
  public user = new BehaviorSubject<UserModel>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(email: any, password: any): Observable<UserModel> {
    return this.http.post<UserModel>('https://reqres.in/api/login', {
      email,
      password,
    });
  }

  public autoLogin(): void {
    const userData: {
      email: string;
      token: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    if (userData.token) {
      this.user.next(userData);
    }
  }
}
