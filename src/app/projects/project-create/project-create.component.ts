import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project-service/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  constructor(private projSvc: ProjectService) { }

  project = new Project('','');

  ngOnInit() {

  }

  onSubmit() {
    this.projSvc.createProject(this.project)
      .subscribe(project => {
        console.log(project);
    });
  }

}
