import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * Authentication User
   */
  public user: any;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.user = {
      username: '',
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
}
