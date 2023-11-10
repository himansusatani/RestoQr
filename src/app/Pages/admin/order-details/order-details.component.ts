import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {



  // @HostListener('window:resize', ['$event'])
  // public onEquipmentPopupInitialized(e) {
  //   if (window.innerWidth > 767 && window.innerWidth < 991) {
  //     this.popupWidth = 500;
  //     this.popupHeight = 'auto';
  //   }
  //   else if (window.innerWidth > 991) {
  //     this.popupWidth = 800;
  //     this.popupHeight = 'auto';
  //   }
  //   else {
  //     this.popupWidth = window.innerWidth - 15;
  //     this.popupHeight = 'auto';
  //   }
  // }
}
