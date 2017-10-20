import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthInterceptorService } from 'app/services/auth-interceptor.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  canActivate() {
    if(this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login'])
    }
  }

  constructor(private authService: AuthInterceptorService, private router: Router) { }

}
