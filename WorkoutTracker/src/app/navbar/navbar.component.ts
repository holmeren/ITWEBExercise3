import { Component, OnInit } from '@angular/core';
import { AuthInterceptorService } from 'app/services/auth-interceptor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public name: String = "";

  constructor(private authService: AuthInterceptorService) { }

  ngOnInit() {
  }

  public isLoggedIn() {
    if(this.authService.isLoggedIn()) {
      this.name = this.authService.currentUser().name;
      return false;
    }
    else return false;
  }

  public logout() {
    this.authService.logout();
  }

}
