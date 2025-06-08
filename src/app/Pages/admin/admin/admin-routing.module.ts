import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from '../login-admin/login-admin.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ResetComponent } from '../../reset/reset.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ShowOderComponent } from '../show-oder/show-oder.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AllOrderComponent } from '../all-order/all-order.component';
import { SettingComponent } from '../setting/setting.component';
import { DetailsComponent } from '../AddFoodMenu/details/details.component';
import { ListComponent } from '../AddFoodMenu/list/list.component';
import { SpecialFoodDetailsComponent } from '../AddSpecialFoodMenu/special-food-details/special-food-details.component';
import { SpecialfoodlistComponent } from '../AddSpecialFoodMenu/specialfoodlist/specialfoodlist.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';



const routes: Routes = [
  { path: 'login', component: LoginAdminComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'reset', component: ResetComponent },
  {
    path: 'sidenav', component: SidenavComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'showorder' },
      { path: 'showorder', component: ShowOderComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'allorder', component: AllOrderComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'edit/:id', component: DetailsComponent },
      { path: 'addFoodMenu', component: DetailsComponent },
      { path: 'listFoodMenu', component: ListComponent },
      { path: 'addSpecialFood', component: SpecialFoodDetailsComponent },
      { path: 'listSpecialFood', component: SpecialfoodlistComponent },
      {path:'todoList',component:TodoListComponent},
      {path:'todoDetail/:id',component:TodoDetailComponent},
      {path:'todoDetail',component:TodoDetailComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
