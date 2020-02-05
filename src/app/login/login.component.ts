import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * Authentication User
   */
  public user: any;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    };
  }

  login() {
    this._authService.login({'email': this.user.email, 'password': this.user.password});
  }

  refreshToken() {
    this._authService.refreshToken();
  }

  logout() {
    this._authService.logout();
  }

  create() {
    this._authService.create({'name': this.user.name, 'email': this.user.email, 'password': this.user.password});
  }

}
