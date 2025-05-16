import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserNavComponent } from '../user-nav/user-nav.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { SpecialFoodMenuComponent } from '../special-food-menu/special-food-menu.component';
import { UserFoodSelectionComponent } from '../user-food-selection/user-food-selection.component';
import { UsercartComponent } from '../usercart/usercart.component';
import { OrderStatusComponent } from '../order-status/order-status.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'userNav/userdetail',
    pathMatch: 'full'
  },
  {
    path: 'userNav',
    component: UserNavComponent,
    children: [
      { path: '', redirectTo: 'userdetail', pathMatch: 'full' },
      { path: 'userdetail', component: UserDetailsComponent },
      { path: 'specialFood', component: SpecialFoodMenuComponent },
      { path: 'foodSelection', component: UserFoodSelectionComponent },
      { path: 'addtocart', component: UsercartComponent },
      { path: 'orderStatus', component: OrderStatusComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
