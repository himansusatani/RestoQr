import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { LoginAdminComponent } from 'src/app/Pages/admin/login-admin/login-admin.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private auth:LoginAdminComponent,private router:Router){}
//   canActivate(next: ActivatedRouteSnapshot, state:RouterStateSnapshot) : boolean{
//     if(this.auth.isLoggedIn()){
//       return true;
//     }
//     else{
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }

export const authGuard: CanActivateFn = () => {
  const authService = inject(LoginAdminComponent);  // Using Angular's inject function for services
  const router = inject(Router);
  if(authService.isLoggedIn()){
    console.log('true');
          return true;
        }
        else{
          console.log('false');
          router.navigate(['/login']);
          return false;
        }
  
};
