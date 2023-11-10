import { Component } from '@angular/core';
import { AddTocartService } from 'src/app/Services/add-tocart.service';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-user-food-selection',
  templateUrl: './user-food-selection.component.html',
  styleUrls: ['./user-food-selection.component.css']
})
export class UserFoodSelectionComponent {
  constructor(private apiservice:ApiCallService,private addtocard : AddTocartService){}

  data : any[]=[];
  ngOnInit():void{
    this.GetAllFoodMenu();
  }
  
  GetAllFoodMenu()
  {
    this.apiservice.GetAllFoodSelection().subscribe(res => {
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
