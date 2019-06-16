import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project-service/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private projSvc: ProjectService,
  ) { }  

  project: Project;

  ngOnInit() {
    const projectID = this.route.snapshot.paramMap.get('id');
    this.getProject(projectID);
  }

  getProject(projectID) {
    this.projSvc.getProject(projectID)
      .subscribe(project => {
        this.project = project;
        console.log(this.project);
    });
  }

  onUpdate() {
    this.projSvc.updateProject(this.project)
      .subscribe(response => {
        console.log(response);
      });
  }

  onDelete() {
    this.projSvc.deleteProject(this.project.id)
      .subscribe(response => {
        console.log(response);
      });
  }

}
