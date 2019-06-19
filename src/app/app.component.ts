import { Component } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations/animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
