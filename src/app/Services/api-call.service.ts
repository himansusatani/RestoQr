import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  baseurl = 'https://localhost:7202/api/';

  constructor(private http:HttpClient) { }

  public GetallorderData()
  {
    return this.http.get<any>(this.baseurl+'ShowOrder/GetUserOrder');
  }

  GetOrderById(soid:any)
  {
    return this.http.get<any>(this.baseurl+'ShowOrder/GetById?SoId='+soid);
  }

  GeneratePdf(soid:any)
  {
    const url = this.baseurl+'ShowOrder/generatepdf?soid='+soid
    return this.http.get(url,{responseType:'blob'})
    .pipe(map((result:any)=>{
      return result;
    }));
    //return this.http.get<any>(this.baseurl+'ShowOrder/generatepdf?soid='+soid);
  }
  
  loginadmin(obj:any){
    return this.http.post<any>(this.baseurl+"AdminLogin/CheckAdminLogin",obj)
  }

  GetOrderByOrderId(orderId:any)
  {
    return this.http.get<any>(this.baseurl+'ShowOrder/GetOrderByOrderId?orderId='+orderId);
  }

  GetTotalPrice(orderId:any)
  {
    return this.http.get<any>(this.baseurl+'ShowOrder/GetTotalAmount?orderId='+orderId);
  }

  DeleteOrderByOrderId(orderId:any,obj:any,status:any)
  {
    return this.http.post<any>(this.baseurl+'ShowOrder/DeleteOrder?orderId='+orderId+'&status='+status,obj);
  }

  AcceptOrder(obj:any,status:any)
  {
    return this.http.post<any>(this.baseurl+'ShowOrder/AcceptOrder?status='+status,obj);
  }

  GetAllOrderWithStatus()

  {
    return this.http.get<any>(this.baseurl+'ShowOrder/GetAllOrderWithStauts');
  }
  //User Api
  GetAllFoodSelection()
  {
    return this.http.get<any>(this.baseurl+'FoodMenu/GetAllFoodDetails');
  }

  GetSpecialFoodMenu()
  {
    return this.http.get<any>(this.baseurl+'FoodMenu/GetAllSpecialFoodDetails');
  }

  CheckOutFood(username:any , tableno:any , mobileno:any ,obj:any)
  {
    return this.http.post<any>(this.baseurl+"OrderFood/InserOrderAndUser?username="+username +"&tableno="+tableno+"&mobileno="+mobileno,obj);
  }
}
