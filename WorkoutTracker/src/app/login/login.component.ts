import { Component, OnInit } from '@angular/core';
import { User } from 'models/user';
import { AuthInterceptorService } from 'app/services/auth-interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(private authService: AuthInterceptorService, private router: Router) { }

  ngOnInit() {
  }

  public onSubmit() {
    if(this.authService.login(this.user)) {
      this.router.navigate(['']);
    }
  }
}
