import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project-service/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private projSvc: ProjectService) { }

  projects = [];

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projSvc.getProjects()
      .subscribe(response => {
        this.projects = response
        if (this.projects.length) {
          console.log('meron');
        } else {
          console.log('wala');
        }
      }, error => {
        console.log(error);
    });
  }
}
