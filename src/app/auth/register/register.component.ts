import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { User } from '../../models/user.model';
import { ProjectService } from '../../services/project-service/project.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authSvc: AuthService,
    private projSvc: ProjectService) { }

  user = new User('', '', '', '');
  hide = true;
  loading = false;

  ngOnInit() {

  }

  onSubmit() {
    this.loading = true;
    this.authSvc.registerUser(this.user)
      .subscribe(response => {
        this.loading = false;
        this.projSvc.openSnackBar('Registration Success :)', 'Done')
        this.authSvc.goTo('login');
      }, error => {
          console.log()
          this.loading = false;
      });
  }

}
