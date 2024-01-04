import { Component } from '@angular/core';
import { AddTocartService } from 'src/app/Services/add-tocart.service';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-special-food-menu',
  templateUrl: './special-food-menu.component.html',
  styleUrls: ['./special-food-menu.component.css']
})
export class SpecialFoodMenuComponent {
  constructor(private apiservice:ApiCallService,private addtocard : AddTocartService){}
  data : any[]=[];
  popupVisible = true;
  ngOnInit():void{
    this.popupVisible;
    this.GetSpecialFoodMenu();
  }

  GetSpecialFoodMenu()
  {
    this.apiservice.GetSpecialFoodMenu().subscribe(res => {
      this.data = res;
      this.data.forEach((a:any)=>{
        Object.assign(a,{total:a.foodPrice});
      })
    })
  }

  addtocart(item: any){
    this.addtocard.addtoCart(item);
  }

}
