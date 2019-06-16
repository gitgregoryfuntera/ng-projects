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

  ngOnInit() {
    
  }

  onSubmit() {
    this.authSvc.loginUser(this.user)
      .subscribe(response => {
          this.authSvc.setToken(response)
      });
  }

}
