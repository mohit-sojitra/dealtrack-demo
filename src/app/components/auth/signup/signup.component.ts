import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  isLoading = false;
  info = '';
  signupForm: FormGroup;

  constructor() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl(null),
      contact: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
      ]),
    });
    this.signupForm.setValidators(this.matchPasswordValidator);
  }

  contactInputHandler(): void {
    this.signupForm.controls.contact.setValue(
      this.signupForm.value.contact.replace(/[^0-9]/g, '')
    );
  }

  onSubmit(form: FormGroup): void {
    this.info += ' welcome: ' + form.value.email;
    this.info += ' Password: ' + form.value.password;
    this.info += ' contact: ' + form.value.contact;
  }

  matchPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      return { noMatch: true };
    }
    return null;
  }
}
