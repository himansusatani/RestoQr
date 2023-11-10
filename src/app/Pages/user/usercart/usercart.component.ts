import { Component } from '@angular/core';
import { AddTocartService } from 'src/app/Services/add-tocart.service';
import { ApiCallService } from 'src/app/Services/api-call.service';
import notify from 'devextreme/ui/notify';


@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent {

  constructor(private addtocarddservice : AddTocartService,private apiservice : ApiCallService){}

  public products:any;
  public grandTotal :any;
  ngOnInit():void{
    this.addtocarddservice.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.addtocarddservice.getTotalPrice(); 
    })
    var  username = localStorage.getItem('username');
    var tableno = localStorage.getItem('tableno');
    var mobileno = localStorage.getItem('mobileno');

    if (username != null) {
      // Remove the quotes if they exist (optional, if you're sure the string is always quoted)
       this.userName = username.replace(/^"(.*)"$/, '$1');
      console.log(this.userName);
    }
    if (tableno != null) {
      // Remove the quotes if they exist (optional, if you're sure the string is always quoted)
       this.tableNo = tableno.replace(/^"(.*)"$/, '$1');
      console.log(this.userName);
    }
    if (mobileno != null) {
      // Remove the quotes if they exist (optional, if you're sure the string is always quoted)
       this.mobileNo = mobileno.replace(/^"(.*)"$/, '$1');
      console.log(this.userName);
    }
  }

  removeItem(item: any){
    this.addtocarddservice.removeCartItem(item);
  }
  emptycart(){
    this.addtocarddservice.removeAllCart();
  }

 


  foodname :any=[];
  orderData :any;
  userName :any;
  tableNo :any;
  mobileNo:any;
  Checkout()
  {
     this.apiservice.CheckOutFood(this.userName,this.tableNo,this.mobileNo,this.products).subscribe(res => {
       this.orderData = res ;
       const message = "Order Placed";
        notify({
          message,
          width: 450,
        },
          'success',
          2000);
     })
   }
}
