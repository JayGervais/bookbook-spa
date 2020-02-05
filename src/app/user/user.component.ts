import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user = { email: '', password: '', name: '' }

  constructor(
    private _authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() { }

  create() {
    this._authService.create(this.user).subscribe((data: {}) => {
      //this.router.navigate(['/login'])
      this._authService.login({'email': this.user.email, 'password': this.user.password});
      this.router.navigate(['/'])
    })
  }

}
