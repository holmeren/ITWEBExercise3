import { Injectable } from '@angular/core';
import { User } from 'models/user';
import { DbService } from 'app/services/db.service';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

//Service is mostly stolen from PER's slides from ITWEB lecture 12
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  }

  constructor(private dbService: DbService, private http: HttpClient) { }

  private saveToken(token: string) {
    window.localStorage['loc8r-token'] = token;
  }

  private getToken() {
    if (window.localStorage['loc8r-token']) {
      return window.localStorage['loc8r-token'];
    } else {
      return '';
    }
  }

  public register(user: User) {
    const url = `${this.dbService.baseUrl}/register`;
    // Shoud be type AuthResponse
    this.http.post<any>(url, user).subscribe(data => {
      this.saveToken(data.token);
      return true;
    },
  (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      // clientside network error
      console.log("An error occured: ", err.error.message);
    } else {
      // backend unsuccessful response
      console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
    return false;
  })
  }

  public isLoggedIn() {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public currentUser(): User {
    if (this.isLoggedIn()) {
      const token = this.getToken();
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      const user = new User()
      user.email =  payload.email;
      user.name = payload.name;
      user.password = payload.password;
      return user;
    } else {
      return;
    }
  }

}
