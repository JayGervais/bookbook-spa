import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';
import { LoginComponent } from '../login/login.component';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _authService: AuthService,
    private login: LoginComponent ) { }

  logout() {
    this._authService.logout();
  }

  ngOnInit() {
  }

}
