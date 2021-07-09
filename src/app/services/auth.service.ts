import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: UserModel = null;

  constructor(private http: HttpClient) {}

  public isLoggedIn(): boolean {
    return !this.user;
  }

  public login(email: string, password: string): Observable<UserModel> {
    return this.http
      .post<UserModel>('https://reqres.in/api/login', {
        email,
        password,
      })
      .pipe(
        tap(({ token }) => {
          const user: UserModel = {
            email,
            token,
          };
          localStorage.setItem('userData', JSON.stringify(user));
          this.user = user;
        })
      );
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
      this.user = userData;
    }
  }
}
