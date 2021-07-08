import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public isLoading = false;
  public error = null;
  constructor(private authService: AuthService, private router: Router) {
    this.checkLoginStatus();
  }
  public onSubmitHandler(loginForm): void {
    this.isLoading = true;
    this.authService
      .login(loginForm.value.email, loginForm.value.password)
      .subscribe(
        (resData) => {
          this.isLoading = false;
          this.error = null;
          const user: UserModel = {
            email: loginForm.value.email,
            token: resData.token,
          };
          this.authService.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
          this.router.navigate(['/home']);
        },
        (error) => {
          this.isLoading = false;
          this.error = error.error;
          console.log(error);
        }
      );
  }
  checkLoginStatus(): void {
    this.authService.autoLogin();
    if (this.authService.user.value) {
      this.router.navigate(['/home']);
    }
  }
}
