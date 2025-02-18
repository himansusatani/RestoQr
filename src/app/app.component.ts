import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestoQr';
  isLoggedIn=false;

  //ngOnInit(){
    // let dt=localStorage.getItem("isLoggedIn");
    // console.log("dt",dt);
    // if(dt=="null"){
    //   this.isLoggedIn=true;
    // }
  //}
  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth = data.screenWidth
    this.isSideNavCollapsed = data.collapsed
  }

}
