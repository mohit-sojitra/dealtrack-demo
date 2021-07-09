import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
          this.router.navigate(['/page']);
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
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/page']);
    }
  }
}
