import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProjectViewComponent } from '../projects/project-view/project-view.component';
import { ProjectCreateComponent } from '../projects/project-create/project-create.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  { path: 'login', component: AuthComponent, data: {animation: 'LoginPage'}},
  { path: 'register', component: RegisterComponent,},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard],  data: {animation: 'HomePage'}},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'projects/:id', component: ProjectViewComponent, canActivate:[AuthGuard]},
  { path: 'projects-create', component: ProjectCreateComponent, canActivate:[AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
