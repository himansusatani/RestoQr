import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/auth/auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { auditTime } from 'rxjs';
import { LoginAdminComponent } from './Pages/admin/login-admin/login-admin.component';
import { SidenavComponent } from './Pages/admin/sidenav/sidenav.component';
import { ShowOderComponent } from './Pages/admin/show-oder/show-oder.component';
import { UserDetailsComponent } from './Pages/user/user-details/user-details.component';
import { UserNavComponent } from './Pages/user/user-nav/user-nav.component';
import { UserFoodSelectionComponent } from './Pages/user/user-food-selection/user-food-selection.component';
import { UsercartComponent } from './Pages/user/usercart/usercart.component';

const routes: Routes = [
  
  {path:'', redirectTo:"login",pathMatch:"full"},
  {path:'login',component:LoginAdminComponent},
  {path:'sidenav',component:SidenavComponent ,children:[
    {path:'',pathMatch:"full", redirectTo:"showorder"},
    {path:'showorder', component:ShowOderComponent}
  ]},

  {path:'userheader',component:UserNavComponent,children:[
    {path:'',pathMatch:"full",redirectTo:"userdetail"},
    {path:'userdetail',component:UserDetailsComponent},
    {path:'foodSelection',component:UserFoodSelectionComponent},
    {path:'addtocart',component:UsercartComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
