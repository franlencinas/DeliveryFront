import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent{
  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(private authService: AuthService, private router: Router) { }

  async onLogout() {
    try {
      await this.authService.logOut();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
