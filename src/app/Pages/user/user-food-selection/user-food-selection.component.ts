import { Component } from '@angular/core';
import { AddTocartService } from 'src/app/Services/add-tocart.service';
import { ApiCallService } from 'src/app/Services/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-food-selection',
  templateUrl: './user-food-selection.component.html',
  styleUrls: ['./user-food-selection.component.css']
})
export class UserFoodSelectionComponent {
  constructor(private apiservice:ApiCallService,private addtocard : AddTocartService,private router: Router){}

  data : any[]=[];
  ngOnInit():void{
    this.GetAllFoodMenu();
  }
  
  onCustomizeCell(e: any) {
    console.log("eee",e);
    // Customize the appearance of the cell based on a condition
    if (e.column.dataField === 'foodId') {
      e.cellElement.style.fontWeight = 'bold';
    }
  }

  GetAllFoodMenu()
  {
    this.apiservice.GetSimpleFoodDetails().subscribe(res => {
      this.data = res;
      this.data.forEach((a:any)=>{
        Object.assign(a,{total:a.foodPrice});
      })
    })
  }

  addtocart(item: any){
    this.addtocard.addtoCart(item);
  }

  public onGrdFieldSchedulesCellPrepared(e:any) {
        // e.cellElement.css("color","#43ff64d9");
  }
  OpenSpecialItem()
  {
    this.router.navigate(['/user/userheader/specialFood']);
  }
}
