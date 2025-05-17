import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/Services/api-call.service';
import { AddTocartService } from 'src/app/Services/add-tocart.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { OrderSignalrServiceTsService } from 'src/app/Services/order-signalr.service.ts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-oder',
  templateUrl: './show-oder.component.html',
  styleUrls: ['./show-oder.component.css']
})
export class ShowOderComponent implements OnInit, OnDestroy {
  grandTotal: any = 0;
  data: any[] = [];
  orderData: any[] = [];
  pdfurl = '';
  orderId: any;
  popupVisible: boolean = false; // Flag for popup visibility
  pdfPopupVisible: boolean = false; // Flag for PDF popup visibility
  gridHeight: number = 400; // Default grid height
  popupWidth: string = '80%'; // Default popup width
  popupHeight: string = '80%'; // Default popup height
  columnWidths: any = {}; // To hold the dynamic column widths

  private signalRSubscription!: Subscription;  // Subscription for SignalR events

  constructor(
    private location: Location,
    private apiservice: ApiCallService,
    private addtocarddservice: AddTocartService,
    private router: Router,
    private route: ActivatedRoute,
    private orderSignalrService: OrderSignalrServiceTsService,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef

  ) { }

  ngOnInit() {
    this.GetOrderData();
    this.orderSignalrService.startConnection();  // Start the SignalR connection

    // this.signalRSubscription = this.orderSignalrService.orderReceived$.subscribe((newOrders) => {
    //   console.log('New order received via SignalR:', newOrders);
    //   this.data = newOrders;  // Update the order data

    //   // Trigger change detection manually if data is updated outside Angular's cycle
    //   this.cdr.detectChanges();
    // });
    this.signalRSubscription = this.orderSignalrService.orderReceived$.subscribe((newOrders) => {
      const message = "New Order Received!!";
      notify({ message, width: 450 }, 'success', 2000);
      if (newOrders && newOrders.length > 0) {
        this.data = newOrders;  // Update your local data
      } else {
        const message = "No Orders Received!!";
        notify({ message, width: 450 }, 'error', 2000);
      }
    });
    this.orderSignalrService.orderReceived$.subscribe((newOrders) => {
      this.data = newOrders; // This will update live
    });
  }

  ngOnDestroy() {
    // Clean up and stop the SignalR connection when the component is destroyed
    if (this.signalRSubscription) {
      this.signalRSubscription.unsubscribe();
    }
    this.orderSignalrService.stopConnection();  // Stop the SignalR connection
  }

  GetOrderData() {
    this.apiservice.GetallorderData().subscribe(res => {
      this.data = res;
    });
  }

  manage(orderId: any) {
    this.apiservice.GetOrderByOrderId(orderId).subscribe(res => {
      this.orderData = res;
    })
    this.popupVisible = true;
    this.getTotalPrice(orderId);
    this.orderId = orderId;
  }

  pdfGenerate(orderId: any) {
  this.apiservice.GeneratePdf(orderId).subscribe(
    (res) => {
      this.pdfurl = res;
      this.pdfPopupVisible = true;
    },
    (error) => {
      console.error("Error generating PDF:", error);
      notify("Failed to generate PDF", "error", 2000);
    }
  );
}

  getTotalPrice(orderId: any) {
    this.apiservice.GetTotalPrice(orderId).subscribe(res => {
      this.grandTotal = res;
    })
  }

  CancleOrder(deleteOrderData: any) {
    console.log(deleteOrderData);
    //const idArray: number[] = [];
    const status = "Rejected";
    for (const data of deleteOrderData) {
      //idArray.push(data.orderId)
      const orderId = data.orderId;
      this.apiservice.DeleteOrderByOrderId(orderId, this.orderData, status).subscribe(res => {
        this.data = res;
        const message = "Order Canceled!!";
        notify({
          message,
          width: 450,
        }, 'error', 2000);
      });
    }
    this.popupVisible = false;
  }

  AcceptOrder() {
    const status = "Success";
    this.apiservice.AcceptOrder(this.orderData, status).subscribe(res => { });
    const message = "Order Accepted!!";
    notify({
      message,
      width: 450,
    }, 'success', 2000);
    this.popupVisible = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.adjustLayout();
  }

  adjustLayout() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    this.gridHeight = windowHeight - 200;

    if (windowWidth < 768) {
      this.popupWidth = '90%';
      this.popupHeight = '80%';
    } else if (windowWidth < 1024) {
      this.popupWidth = '80%';
      this.popupHeight = '80%';
    } else {
      this.popupWidth = '60%';
      this.popupHeight = '70%';
    }
  }

  adjustGridDimensions(): void {
    const windowWidth = window.innerWidth;

    this.gridHeight = window.innerHeight - 150;

    if (windowWidth < 768) {
      this.columnWidths = {
        userId: 70,
        orderId: 70,
        username: 70,
        mobileno: 60,
        btn: 70,
      };
    } else if (windowWidth < 1024) {
      this.columnWidths = {
        userId: 90,
        orderId: 80,
        username: 90,
        mobileno: 90,
        btn: 90,
      };
    } else {
      this.columnWidths = {
        userId: 90,
        orderId: 80,
        username: 90,
        mobileno: 90,
        btn: 120,
      };
    }
  }
}
