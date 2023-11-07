import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  @Output() counterChange = new EventEmitter();  
constructor(private router:Router){}

  
  userform = new FormGroup({
    tableno:  new FormControl('',[Validators.required]),
    username: new FormControl('', [Validators.required]),
    no: new FormControl('', [Validators.required]),
   

    
  })

  submit() {
    localStorage.setItem('username',JSON.stringify(this.userform.value.username));
    localStorage.setItem('tableno',JSON.stringify(this.userform.value.tableno));
    localStorage.setItem('mobileno',JSON.stringify(this.userform.value.no));
  }
}
