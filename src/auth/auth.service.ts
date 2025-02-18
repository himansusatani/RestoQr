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
    localStorage.removeItem('userData')
    localStorage.removeItem('username')
    localStorage.removeItem('token')
  }
}
