import { Component } from '@angular/core';
import { AddTocartService } from 'src/app/Services/add-tocart.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent {

  constructor(private addtocarddservice : AddTocartService){}

  public products:any=[];
  public grandTotal :any;
  ngOnInit():void{
    this.addtocarddservice.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.addtocarddservice.getTotalPrice(); 
    })
  }

  removeItem(item: any){
    this.addtocarddservice.removeCartItem(item);
  }
  emptycart(){
    this.addtocarddservice.removeAllCart();
  }
}
