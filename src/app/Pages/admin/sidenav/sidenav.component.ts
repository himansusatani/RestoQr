import { Component, EventEmitter, HostListener, Output, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { navbarData } from './nav-data';

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
  @ViewChild(MatDrawer) sidenav!: MatDrawer;

  items: any;
  isLoggedIn = true;
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  constructor(private observer: BreakpointObserver, private route: Router, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.items = [
      { text: 'Share', items: [{ text: 'Facebook' }, { text: 'Twitter' }] },
      { text: 'Download' },
      { text: 'Comment' },
      { text: 'Favorite' }
    ];
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
    this.badgevisible = !this.badgevisible;
  }
}
