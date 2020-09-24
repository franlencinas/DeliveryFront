import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email    : new FormControl(''),
    password : new FormControl('')
  });
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  async onLogin() {
    const {email, password} = this.loginForm.value;
    try {
      console.log('Login: ', this.loginForm.value);
      const user = await this.authService.login(email, password);
      if (user) {
        // redirect to home
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
