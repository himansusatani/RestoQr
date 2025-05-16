import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const token = localStorage.getItem('Token');
    //const tokenExpiration = localStorage.getItem('TokenExpiration');
    const token = sessionStorage.getItem('Token');
    const tokenExpiration = sessionStorage.getItem('TokenExpiration');
    if (token && tokenExpiration) {
      const expirationTime = parseInt(tokenExpiration, 10);
      
      if (Date.now() >= expirationTime) {
        this.logout();
        return next.handle(req); // Continue with request but without token
      }

      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      
      return next.handle(cloned);
    } else {
      return next.handle(req); // Continue with request if no token is found
    }
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('TokenExpiration');
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/admin/login']); // Redirect to login page
  }
}
