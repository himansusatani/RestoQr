import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  constructor(private router: Router, private apiservice: ApiCallService, private http: HttpClient) { }
  isLoading: boolean = false;
  ngOnInit(): void {
  }
  loginform = new FormGroup({
    emailid: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z._%+-]+[0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]),
    password: new FormControl('', [Validators.required])
  })

  submit() {
    let obj = this.loginform.getRawValue();
    this.isLoading = true;
    this.apiservice.loginadmin(obj).subscribe(data => {
      if (data.isLoggedIn == true) {
        const localdata = {
          userid:data.userid, 
          email: data.emailId,
          password:data.password,
          isLoggedIn:true
          }
          localStorage.setItem('data',JSON.stringify(localdata));
        this.isLoading = false;
        this.router.navigate(['/sidenav/showorder']);
        const message = "Login Successfully...!!!";
        notify({
          message,
          width: 450,
        },
          'success',
          2000);
      }
      else {
        this.isLoading = false;
        const errorMsg="Login Failed...!!!";
        notify({
          errorMsg,
          width:450,
        },
        'error',
        2000
        );
      }
    })
}

  get username(){
  return this.loginform.get('username')
} 
  get password(){
  return this.loginform.get('password')
}
 

}
