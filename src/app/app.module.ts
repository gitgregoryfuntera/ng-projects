import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProjectsRoutingModule } from './routing/projects-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProjectCreateComponent,
    ProjectViewComponent
  ],
  imports: [
    BrowserModule,
    ProjectsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
