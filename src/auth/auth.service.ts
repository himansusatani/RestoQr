import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn(){

    return !! localStorage.getItem('isLoggedIn');
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('TokenExpiration');
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
