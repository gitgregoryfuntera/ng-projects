import { Component } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authSvc: AuthService) {}
  
  title = 'app-projects';

  checkLogin(): boolean {
    let isLogin = true;
    const token = localStorage.getItem('token');
    if (!token) {
      isLogin = false;
    }
    return isLogin;
  }

  onLogout() {
    this.authSvc.logoutUser()
      .subscribe(response => {
        if(response.status  === 200) {
          this.authSvc.clearToken();
          this.authSvc.goTo('login');
        }
      });
  }
}
