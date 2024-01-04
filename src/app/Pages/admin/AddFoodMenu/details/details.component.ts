import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  popupVisible = true;
  rForm!: FormGroup;
  
  constructor(
     private location: Location
    ,public http: HttpClient) {

  }
  ngOnInit(): void {
    this.popupVisible;
  }
  Closebtn()
  {
    this.location.back();
  }
}
