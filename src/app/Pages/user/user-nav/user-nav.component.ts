import { Component } from '@angular/core';
import { AddTocartService } from 'src/app/Services/add-tocart.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent {
  constructor(private addtocard:AddTocartService){}

  ngOnInit():void
  {
    
  }

  badgevisible = false;

  badgevisibility() {
    this.badgevisible = true;
  }
}
