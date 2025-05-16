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
    //localStorage.removeItem('token')
    //localStorage.removeItem('TokenExpiration');
    sessionStorage.removeItem('Token');
    sessionStorage.removeItem('TokenExpiration');
    localStorage.removeItem('isLoggedIn');
  }

  getToken(){
    //return localStorage.getItem('token')
    return sessionStorage.getItem('Token');

  }
}
