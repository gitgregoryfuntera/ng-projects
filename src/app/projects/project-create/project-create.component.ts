import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project-service/project.service';
import { AuthService } from '../../services/auth-service/auth.service';
import { Project } from '../../models/project.model';


@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  constructor(
    private projSvc: ProjectService,
    private authSvc: AuthService) { }

  project = new Project('','');
  loading = false;
  errors: Object = {};
  
  ngOnInit() {

  }

  onSubmit() {
    this.loading = true;
    this.projSvc.createProject(this.project)
      .subscribe(project => {
        this.loading = false;
        this.authSvc.goTo('home');
        this.projSvc.openSnackBar('Successfully added a new project :)', 'Done');
    }, error => {
        this.errors = error.error.errors;
        this.loading = false;
    });
  }



}
