import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authSvc: AuthService) { }

  user = new User('', '', '', '');

  ngOnInit() {

  }

  onSubmit() {
    this.authSvc.registerUser(this.user)
      .subscribe(response => {
        this.authSvc.setToken(response);
      });
  }

}
