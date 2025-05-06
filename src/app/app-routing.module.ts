// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// //import { AuthGuard } from 'src/auth/auth.guard';
// import {authGuard} from 'src/auth/auth.guard';
// import { AuthService } from 'src/auth/auth.service';
// import { auditTime } from 'rxjs';
// import { LoginAdminComponent } from './Pages/admin/login-admin/login-admin.component';
// import { SidenavComponent } from './Pages/admin/sidenav/sidenav.component';
// import { ShowOderComponent } from './Pages/admin/show-oder/show-oder.component';
// import { UserDetailsComponent } from './Pages/user/user-details/user-details.component';
// import { UserNavComponent } from './Pages/user/user-nav/user-nav.component';
// import { UserFoodSelectionComponent } from './Pages/user/user-food-selection/user-food-selection.component';
// import { UsercartComponent } from './Pages/user/usercart/usercart.component';
// import { DashboardComponent } from './Pages/admin/dashboard/dashboard.component';
// import { AllOrderComponent } from './Pages/admin/all-order/all-order.component';
// import { SpecialFoodMenuComponent } from './Pages/user/special-food-menu/special-food-menu.component';
// import { SettingComponent } from './Pages/admin/setting/setting.component';
// import { DetailsComponent } from './Pages/admin/AddFoodMenu/details/details.component';
// import { ListComponent } from './Pages/admin/AddFoodMenu/list/list.component';
// import { SpecialFoodDetailsComponent } from './Pages/admin/AddSpecialFoodMenu/special-food-details/special-food-details.component';
// import { SpecialfoodlistComponent } from './Pages/admin/AddSpecialFoodMenu/specialfoodlist/specialfoodlist.component';
// import { OrderStatusComponent } from './Pages/user/order-status/order-status.component';
// import { ForgotPasswordComponent } from './Pages/admin/forgot-password/forgot-password.component';
// import { ResetComponent } from './Pages/reset/reset.component';

// const routes: Routes = [
  
//   {path:'', redirectTo:"login",pathMatch:"full"},
//   {path:'login',component:LoginAdminComponent},
//   {path:'forgotPassword', component:ForgotPasswordComponent},
//   {path:'reset',component:ResetComponent},
//   {path:'sidenav',component:SidenavComponent ,children:[
//     {path:'',pathMatch:"full", redirectTo:"showorder"},
//     {path:'showorder', component:ShowOderComponent },
//     {path:'dashboard',component:DashboardComponent },
//     {path:'allorder',component:AllOrderComponent },
//     {path:'setting',component:SettingComponent },
//     {path:'addFoodMenu',component:DetailsComponent },
//     {path:'listFoodMenu',component:ListComponent },
//     {path:'addSpecialFood',component:SpecialFoodDetailsComponent },
//     {path:'listSpecialFood',component:SpecialfoodlistComponent },
//   ]},
  
//   {path:'userheader',component:UserNavComponent,children:[
//     {path:'',pathMatch:"full",redirectTo:"userdetail"},
//     {path:'specialFood',component:SpecialFoodMenuComponent},
//     {path:'userdetail',component:UserDetailsComponent},
//     {path:'foodSelection',component:UserFoodSelectionComponent},
//     {path:'addtocart',component:UsercartComponent},
//     {path:'orderStatus',component:OrderStatusComponent}
//   ]},
  
//   { path: 'admin', loadChildren: () => import('./Pages/admin/admin/admin.module').then(m => m.AdminModule) },
  
//   { path: 'user', loadChildren: () => import('./Pages/user/user/user.module').then(m => m.UserModule) },
//   // {path:'',redirectTo:'dashboard', pathMatch:'full'},
//   // {path:'dashboard', component:DashboardComponent},
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () => import('./Pages/admin/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./Pages/user/user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
