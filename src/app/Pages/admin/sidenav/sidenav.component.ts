import { Component, EventEmitter, HostListener, Output, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { navbarData } from './nav-data';
import { NotificationServiceService } from 'src/app/Services/notification-service.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements AfterViewInit {
  showFiller = false;
  @ViewChild('drawer') drawer!: MatDrawer;
  badgevisible = false;
  //@ViewChild(MatDrawer) sidenav!: MatDrawer;

  popupVisible: boolean = false; // Flag for popup visibility
  pdfPopupVisible: boolean = false; // Flag for PDF popup visibility
  gridHeight: number = 400; // Default grid height
  popupWidth: string = '80%'; // Default popup width
  popupHeight: string = '80%'; // Default popup height
  items: any;
  isLoggedIn = true;
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  notificationMessage: string = '';
  notificationCount = 0;
  notificationArray: any[] = [];
  constructor(private observer: BreakpointObserver, private route: Router, private cdRef: ChangeDetectorRef, private notificationService: NotificationServiceService) {}

  ngOnInit() {
    this.items = [
      { text: 'Share', items: [{ text: 'Facebook' }, { text: 'Twitter' }] },
      { text: 'Download' }, 
      { text: 'Comment' },
      { text: 'Favorite' }
    ];
    this.notificationService.currentMessage.subscribe(message => {
      if (message) {
        this.notificationMessage = message;
        this.notificationArray.push(message); // Add new message to the array
        console.log("Notification Array:", this.notificationArray);
        this.notificationCount = this.notificationArray.length; // Update notification count based on array length
      }
    });
  }

  logout() {
    localStorage.clear();
    const message = 'LogOut Successfully...!!!';
    notify({ message, width: 450 }, 'success', 2000);
    this.route.navigate(['/admin/login']);
  }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.drawer.mode = 'over';
        this.drawer.close();
      } else {
        this.drawer.mode = 'side';
        this.drawer.open();
      }

      // Trigger change detection manually to avoid ExpressionChangedAfterItHasBeenCheckedError
      this.cdRef.detectChanges();
    });
  }

  badgevisibility() {
    console.log("Badge visibility toggled");
    this.popupVisible = true;
  }

  clearNotifications() {
    this.notificationMessage = '';
    this.notificationCount = 0;
    this.notificationArray = []; // Clear the notification array
  }
}
