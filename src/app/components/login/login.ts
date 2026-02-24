import { Component } from '@angular/core';
import { AuthGoogle } from '../../services/auth-google';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private authGoogle: AuthGoogle) {

  }

  login() {
    this.authGoogle.login();
  }

}
