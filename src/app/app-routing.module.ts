import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Pages/header/header.component';
import {ShowOderComponent} from './Pages/show-oder/show-oder.component';
import { LoginAdminComponent } from './Pages/login-admin/login-admin.component';
import { SidenavComponent } from './Pages/sidenav/sidenav.component';
import { UserNavComponent } from './Pages/user-nav/user-nav.component';
import { UserFoodSelectionComponent } from './Pages/user-food-selection/user-food-selection.component';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { auditTime } from 'rxjs';
import { AddTocartService } from './Services/add-tocart.service';
import { UsercartComponent } from './Pages/usercart/usercart.component';
const routes: Routes = [
  
  {path:'', redirectTo:"login",pathMatch:"full"},
  {path:'login',component:LoginAdminComponent},
  {path:'sidenav',component:SidenavComponent ,children:[
    {path:'',pathMatch:"full", redirectTo:"showorder"},
    {path:'showorder', component:ShowOderComponent}
  ]},

  {path:'userheader',component:UserNavComponent,children:[
    {path:'',pathMatch:"full",redirectTo:"foodSelection"},
    {path:'foodSelection',component:UserFoodSelectionComponent},
    {path:'addtocart',component:UsercartComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
