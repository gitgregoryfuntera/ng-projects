import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authSvc: AuthService) { }

  user = new User('', '');
  hide = true;
  loading = false;
  errors: Object = {};
  authError: Object = {};

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    this.authSvc.loginUser(this.user)
      .subscribe(response => {
          this.authSvc.setToken(response);
          this.authSvc.goTo('home');
      }, error => {
          this.authError = {};
          this.errors = {};
          // 401 error (Unauthorized)
          if (error.error) {
            this.authError = error.error
          }
          // 422 error (Invalid Data)
          if (error.error.errors) {
            this.errors = error.error.errors; 
          }
          this.loading = false;
      });
  }

}
