import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'models/user';
import { AuthInterceptorService } from 'app/services/auth-interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User = new User();

  constructor(private authService: AuthInterceptorService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.user);
    this.router.navigate(['']);    
  }

}
