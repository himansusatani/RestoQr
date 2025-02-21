import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AddTocartService } from 'src/app/Services/add-tocart.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent {
  constructor(private observer: BreakpointObserver,private addtocard:AddTocartService){}
    sidenav!: MatSidenav;
  
  ngOnInit():void
  {
    
  }

  badgevisible = false;

  ngAfterViewInit() {
    this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else {
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
  }
  badgevisibility() {
    this.badgevisible = !this.badgevisible;
  }
}
