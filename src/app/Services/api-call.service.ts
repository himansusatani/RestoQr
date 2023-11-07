import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  baseurl = 'https://localhost:7202/api/';

  constructor(private http:HttpClient) { }

  public GetallorderData()
  {
    return this.http.get<any>(this.baseurl+'ShowOrder/GetAllOrderData');
  }

  GetOrderById(soid:any)
  {
    return this.http.get<any>(this.baseurl+'ShowOrder/GetById?SoId='+soid);
  }

  GeneratePdf(soid:any)
  {
    return this.http.get<any>(this.baseurl+'ShowOrder/generatepdf?soid='+soid);
  }
  
  loginadmin(obj:any){
    return this.http.post<any>(this.baseurl+"AdminLogin/CheckAdminLogin",obj)
  }



  //User Api
  GetAllFoodSelection()
  {
    return this.http.get<any>(this.baseurl+'FoodMenu/GetAllFoodDetails');
  }

  CheckOutFood(username:any , tableno:any , mobileno:any ,obj:any)
  {
    return this.http.post<any>(this.baseurl+"OrderFood/InserOrderAndUser?username="+username +"&tableno="+tableno+"&mobileno="+mobileno,obj);
  }
}
