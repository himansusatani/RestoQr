import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ResetPassword } from './reset-password/reset-password.module';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  // baseurl = 'https://localhost:7202/api/';
  baseurl = 'http://192.168.0.15:5000/api/'
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

  GetAllOrderWithStatus(){
    return this.http.get<any>(this.baseurl+'ShowOrder/GetAllOrderWithStatus');
  }

  InsertUpdateFoodMenu(obj:any, id:any){
    return this.http.post<any>(this.baseurl+'FoodMenu/InsertUpdateFoodMenu?id='+id,obj);
  }

  DeleteFoodMenu(id:any){
    return this.http.delete<any>(this.baseurl+'FoodMenu/DeleteFoodMenu?id='+id);
  }

  GetAllTodoList(){
    return this.http.get<any>(this.baseurl+'TodoList/GetAllTodoList');
  }

  GetAllTodoListById(id:any){
    return this.http.get<any>(this.baseurl+'TodoList/GetAllTodoListById?id='+id);
  } 

  InsertUpdateTodoList(obj:any, id:any){
    return this.http.post<any>(this.baseurl+'TodoList/InsertUpdateTodoList?id='+id,obj);
  }
  DeleteTodoList(id:any){
    return this.http.delete<any>(this.baseurl+'TodoList/DeleteTodoList?id='+id);
  }

  //User Api

  GetAllFoodDetails(){
    return this.http.get<any>(this.baseurl+'FoodMenu/GetAllFoodDetails');
  }
  GetAllFoodDetailsById(id:any)
  {
    return this.http.get<any>(this.baseurl+'FoodMenu/GetAllFoodDetailsById?id='+id);
  }
  GetSimpleFoodDetails()
  {
    return this.http.get<any>(this.baseurl+'FoodMenu/GetSimpleFoodDetails');
  }

  GetSpecialFoodMenu()
  {
    return this.http.get<any>(this.baseurl+'FoodMenu/GetAllSpecialFoodDetails');
  }

  CheckOutFood(username:any , tableno:any , mobileno:any ,obj:any)
  {
    return this.http.post<any>(this.baseurl+"OrderFood/InserOrderAndUser?username="+username +"&tableno="+tableno+"&mobileno="+mobileno,obj);
  }

  SendRestPasswordLink(email:any){
     return this.http.post<any>(this.baseurl+'EmailSend/'+'send-reset-email/'+email,{});
    //return this.http.post<any>(`${this.baseurl}EmailSend/send-reset-email/${email}`,{})
  }

  ResetPassword(resetPasswordObj: ResetPassword){
    return this.http.post<any>(this.baseurl+'AdminLogin/reset-password',resetPasswordObj)
  }
}
