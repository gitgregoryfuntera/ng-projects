import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  API = environment.API;

  constructor(
    private httpClient: HttpClient,
    private _snackBar: MatSnackBar) { }

  getProjects(): Observable<any> {
    return this.httpClient.get(this.API + 'projects');
  }

  getProject(projectID): Observable<any> {
    return this.httpClient.get(this.API + 'projects/' + projectID) ;
  }

  createProject(project: Project): Observable<any> {
     return this.httpClient.post(this.API + 'projects', project);
  }

  updateProject(project: Project): Observable<any> {
    return this.httpClient.patch(this.API + 'projects/' + project.id, project);
  }

  deleteProject(projectID): Observable<any> {
    return this.httpClient.delete(this.API + 'projects/' + projectID);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2500,
      verticalPosition: 'top',
    });
  }
}
