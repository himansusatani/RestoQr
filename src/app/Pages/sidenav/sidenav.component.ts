import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  showFiller = false;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  items: any;
  constructor(private observer: BreakpointObserver,private route:Router) {}

  isLoggedIn=true;
  logout(){
    localStorage.clear();
    const message = "LogOut Successfully...!!!";
        notify({
          message,
          width: 450,
        },
          'success',
          2000);
    this.route.navigate(['/login']);
  }

  ngOnInit(){
    this.items = [{
      text: 'Share',
      items: [
        { text: 'Facebook' },
        { text: 'Twitter' }],
    },
    { text: 'Download' },
    { text: 'Comment' },
    { text: 'Favorite' },
    ]
  }
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
  badgevisible = false;

  badgevisibility() {
    this.badgevisible = true;
  }
}
