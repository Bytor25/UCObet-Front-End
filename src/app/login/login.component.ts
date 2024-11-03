import { Component } from '@angular/core';
import { login } from '../clases/login';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router: Router, 
    private location: Location,
  ) {}

  loginCredentials: login=new login;
  isLoginComponent: boolean = true;
  showPassword: boolean = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  refreshPage() {
    this.location.go(this.location.path());
    window.location.reload(); 
  }
}
