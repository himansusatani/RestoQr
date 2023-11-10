import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-show-oder',
  templateUrl: './show-oder.component.html',
  styleUrls: ['./show-oder.component.css']
})
export class ShowOderComponent {
  popupVisible = false;
  data:any[]=[];
  orderData :any;
  pdfurl='';
  constructor(private apiservice : ApiCallService,private http:HttpClient)
  { }

  ngOnInit():void{
    this.GetOrderData();
  }

  GetOrderData(){
    this.apiservice.GetallorderData().subscribe( res => {
      this.data=res;
      console.log('data',this.data);
    });
  }
   baseurl = 'https://localhost:7202/api/';
   manage(orderId:any)
  {
    console.log('id',orderId);
    this.apiservice.GetOrderByOrderId(orderId).subscribe(res => {
      this.orderData = res;
    })
    this.popupVisible = true;
    // this.apiservice.GeneratePdf(SoId).subscribe(( data) => {
    //     let blob:Blob=data.body as Blob;
    //     let url = window.URL.createObjectURL(blob);
    //    // window.open(url);
    //    this.pdfurl=url;

    // })


    
  }
}
