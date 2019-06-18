import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project-service/project.service';
import { Project } from '../../models/project.model';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private projSvc: ProjectService,
    private authSvc: AuthService,
  ) { }  

  project: Project;
  loading = false;

  ngOnInit() {
    const projectID = this.route.snapshot.paramMap.get('id');
    this.getProject(projectID);
  }

  getProject(projectID) {
    this.projSvc.getProject(projectID)
      .subscribe(project => {
        this.project = project;
        console.log(this.project);
    }, error => {
        console.log(error);
    });
  }

  onUpdate() {
    this.loading = true;
    this.projSvc.updateProject(this.project)
      .subscribe(response => {
        console.log(response);
        this.loading = false;
        this.projSvc.openSnackBar('Successfully updated Project :)', 'Done');
      }, error => {
          this.loading = false;
          console.log(error);
      });
  }

  onDelete() {
    this.projSvc.deleteProject(this.project.id)
      .subscribe(response => {
        console.log(response);
        this.authSvc.goTo('home');
        this.projSvc.openSnackBar('Successfully Deleted a Project :)', 'Done');
      }, error => {
          console.log(error);
      });
  }

}
