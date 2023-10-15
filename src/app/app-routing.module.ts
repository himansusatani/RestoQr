import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Pages/header/header.component';
import {ShowOderComponent} from './Pages/show-oder/show-oder.component';
const routes: Routes = [
  
  {path:'', redirectTo:"login",pathMatch:"full"},
  {path:'showorder',component:ShowOderComponent},
    // path:'header',
    // component:HeaderComponent
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
