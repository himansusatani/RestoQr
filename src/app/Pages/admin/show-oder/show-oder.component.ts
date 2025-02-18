import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/Services/api-call.service';
import { AddTocartService } from 'src/app/Services/add-tocart.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { interval, Observable, Subscription, switchMap, timer } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-show-oder',
  templateUrl: './show-oder.component.html',
  styleUrls: ['./show-oder.component.css']
})
export class ShowOderComponent implements OnInit{
  grandTotal: any = 0;
  data: any[] = [];
  orderData: any[] = [];
  pdfurl = '';
  orderId : any;
  popupVisible: boolean = false; // Flag for popup visibility
  gridHeight: number = 400; // Default grid height
  popupWidth: string = '80%'; // Default popup width
  popupHeight: string = '80%'; // Default popup height

  constructor(private location: Location, private apiservice: ApiCallService, private http: HttpClient, private addtocarddservice: AddTocartService, private router: Router, private route: ActivatedRoute,
  ) { }
  private refreshSubscription!: Subscription;
  
  ngOnInit() {
   this.GetOrderData();
    // this.refreshSubscription = this.apiservice.GetallorderData().subscribe({
    //   next: (Apidata) => {
    //     this.data = Apidata;
    //     console.log('ya bro');
    //   },
    //   error:(error)=>{
    //     console.log('no bro');
    //   }
    // })
    
  //  this.socket.on('newOrder', (order :any) => {
  //   this.data.push(order); // Add new order to the list
  //   console.log('hello',this.data);
  //});

    // setInterval(() => {
    //   this.GetOrderData();
    // }, 5000);
  //   this.refreshSubscription = interval(5000).pipe(
  //     switchMap(() => this.apiservice.GetallorderData()) 
  //   ).subscribe((response) => {
  //     this.data = response;
  //   });
   }

  // ngOnDestroy(): void {
  //   if (this.refreshSubscription) {
  //     this.refreshSubscription.unsubscribe();
  //   }
  // }

  GetOrderData() {
    this.apiservice.GetallorderData().subscribe(res => {
      this.data = res;
    });
  }
  baseurl = 'https://localhost:7202/api/';
  manage(orderId: any) {
    this.apiservice.GetOrderByOrderId(orderId).subscribe(res => {
      this.orderData = res;
    })
    this.popupVisible = true;
    this.getTotalPrice(orderId);
    this.orderId = orderId;
  }
  pdfGenerate(orderId:any)
  {
    this.apiservice.GeneratePdf(orderId).subscribe(
      (res)=>{
        this.pdfurl = res;
      }
    )
  }

  getTotalPrice(orderId: any) {
    this.apiservice.GetTotalPrice(orderId).subscribe(res => {
      this.grandTotal = res;
    })
  }

  CancleOrder(deleteOrderData: any) {
    console.log(deleteOrderData);
    const idArray: number[] = [];
    var status="Rejected"
    for (const data of deleteOrderData) {
      idArray.push(data.orderId)
      this.apiservice.DeleteOrderByOrderId(idArray,this.orderData,status).subscribe(res => {
        this.data = res;
        const message = "Order Canceld!!";
        notify({
          message,
          width: 450,
        },
          'error',
          2000);
      })
      
      // this.apiservice.GetallorderData().subscribe(res => {
      //   this.data = res;
      // })
    }
    this.popupVisible = false;
    // this.location.back();
  }
  AcceptOrder() {
    var status = "Success"
    this.apiservice.AcceptOrder(this.orderData, status).subscribe(res => {
    })
    const message = "Order Accepted!!";
    notify({
      message,
      width: 450,
    },
      'success',
      2000);
      //this.CancleOrder(this.orderData);
      this.popupVisible=false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.adjustLayout();
  }

  adjustLayout() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Adjust grid height based on window height
    this.gridHeight = windowHeight - 200; // Subtracting space for header or other components

    // Adjust popup size dynamically
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
}
