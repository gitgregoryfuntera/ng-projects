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
      }, error => {
        console.log(error);
    });
  }
}
