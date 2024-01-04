import { Injectable } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddTocartService {

  public cartItemList: any = []
  public data = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts() {
    return this.data.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.data.next(product);
  }
  addtoCart(data: any) {
    this.cartItemList.push(data);
    this.data.next(this.cartItemList);
    if (this.cartItemList != null) {
      const message = "SuccessFully Add To Cart...!!!";
      notify({
        message,
        width: 450,
      },
        'success',
        1000);
    }
    else {
      const message = "Wrong Try ,,Please Try Again...!!!";
      notify({
        message,
        width: 450,
      },
        'success',
        2000);
    }
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal = grandTotal + a.foodPrice;
    })
    return grandTotal;
  }

  removeCartItem(data: any) {
    this.cartItemList.splice(this.cartItemList.indexOf(data), 1);
    this.data.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = []
    this.data.next(this.cartItemList);
  }
}
