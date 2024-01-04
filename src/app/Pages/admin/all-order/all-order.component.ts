import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.component.html',
  styleUrls: ['./all-order.component.css']
})
export class AllOrderComponent {
constructor(private apiservice : ApiCallService){}

ngOnInit(): void {
  this.GetData();
}

data: any[] = [];
  GetData()
  {
    this.apiservice.GetAllOrderWithStatus().subscribe(res => {
      this.data = res;
    })
  }
}
