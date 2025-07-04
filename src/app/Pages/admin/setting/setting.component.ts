import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {

  constructor(private router:Router){}

  AddMenu()
  {
    this.router.navigate(['admin/sidenav/addFoodMenu']);
  }

  editMenu()
  {
    this.router.navigate(['admin/sidenav/listFoodMenu']);
  }
}
