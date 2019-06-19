import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProjectsRoutingModule } from './routing/projects-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProjectInterceptor } from './interceptors/project.interceptor';
import { FormsModule }   from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { AvatarModule } from 'ngx-avatar';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProjectCreateComponent,
    ProjectViewComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProjectsRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AvatarModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ProjectInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
