import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/Services/api-call.service';
import { AddTocartService } from 'src/app/Services/add-tocart.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-show-oder',
  templateUrl: './show-oder.component.html',
  styleUrls: ['./show-oder.component.css']
})
export class ShowOderComponent {
  popupVisible = false;
  grandTotal: any = 0;
  data: any[] = [];
  orderData: any[] = [];
  pdfurl = '';
  orderId : any;
  constructor(private location: Location, private apiservice: ApiCallService, private http: HttpClient, private addtocarddservice: AddTocartService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetOrderData();
  }

  GetOrderData() {
    this.apiservice.GetallorderData().subscribe(res => {
      console.log('res',res);
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
}
