import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestoQr';
  isLoggedIn=false;

  ngOnInit(){
    let dt=localStorage.getItem("isLoggedIn");
    console.log("dt",dt);
    if(dt=="true"){
      this.isLoggedIn=true;
    }
  }

}
