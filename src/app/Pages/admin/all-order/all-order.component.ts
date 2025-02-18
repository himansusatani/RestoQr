import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.component.html',
  styleUrls: ['./all-order.component.css']
})
export class AllOrderComponent implements OnInit {

constructor(private apiservice : ApiCallService){}

  gridWidth: string = '100%'; // Grid width
  gridHeight: number = 400; // Default height
  columnWidths: any = {}; // To hold the dynamic column widths

ngOnInit(): void {
  this.GetData();
  this.adjustGridDimensions();
}

data: any[] = [];
  GetData()
  {
    this.apiservice.GetAllOrderWithStatus().subscribe(res => {
      this.data = res;
    })
  }

  // Listen to window resize events to adjust the grid and column widths
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.adjustGridDimensions();
  }

  // Function to adjust the grid width and column widths based on the window size
  adjustGridDimensions(): void {
    const windowWidth = window.innerWidth;

    // Adjust grid height dynamically based on window height
    this.gridHeight = window.innerHeight - 150; // Adjust this based on other UI components

    // Adjust column widths based on screen size
    if (windowWidth < 768) {
      // For mobile devices, set columns to smaller widths
      this.columnWidths = {
        id: 70,
        status: 70,
        userid: 70,
        orderId: 60,
        tableno: 70,
        username: 70,
        foodid: 70,
        foodname: 90,
        foodprice: 90,
        fooddescription: 90,
      };
    } else if (windowWidth < 1024) {
      // For tablet devices
      this.columnWidths = {
        id: 90,
        status: 90,
        userid: 90,
        orderId: 80,
        tableno: 90,
        username: 90,
        foodid: 90,
        foodname: 110,
        foodprice: 110,
        fooddescription: 110,
      };
    } else {
      // For desktop devices
      this.columnWidths = {
        id: 90,
        status: 90,
        userid: 90,
        orderId: 80,
        tableno: 90,
        username: 90,
        foodid: 90,
        foodname: 120,
        foodprice: 120,
        fooddescription: 120,
      };
    }
  }
}
