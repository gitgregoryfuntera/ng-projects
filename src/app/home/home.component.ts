import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project-service/project.service';
import { AuthService } from '../services/auth-service/auth.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private projSvc: ProjectService,
    private authSvc: AuthService) { }

  projects = [];

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projSvc.getProjects()
      .subscribe(response => {
        this.projects = response
      }, error => {
        console.log(error);
    });
  }

  onLogout() {
    this.authSvc.logoutUser()
      .subscribe(response => {
        const status = response.status;
        if (status === 200) {
          this.authSvc.clearToken();
          this.authSvc.goTo('login');
        }
    }, error => {
        console.log(error)
    });
  }
}
