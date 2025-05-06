import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';
import notify from 'devextreme/ui/notify';
import { Token } from '@angular/compiler';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  
  forgotPasswordForm: FormGroup;
  popupVisible: boolean = false; // Flag for popup visibility
  popupWidth: string = '80%'; // Default popup width
  popupHeight: string = '80%'; // Default popup height

  constructor(private fb: FormBuilder,private router: Router, private apiservice: ApiCallService, private http: HttpClient,  private authService: AuthService,
  ) { this.forgotPasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });}
  isLoading: boolean = false;
  ngOnInit(): void {
  }
  loginform = new FormGroup({
    emailid: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z._%+-]+[0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]),
    password: new FormControl('', [Validators.required])
  })

  submit() {
    let  obj = this.loginform.getRawValue();
    this.isLoading = true;
    
    this.apiservice.loginadmin(obj).subscribe(data => {
      if (data.token) {
        const token = data.token;
        
        // Decode the JWT token to extract the expiration time
        const decodedToken = this.decodeJwt(token);
        const expirationTime = decodedToken.exp * 1000; // Convert exp (seconds) to milliseconds
  
        // Store token and expiration time in localStorage
        localStorage.setItem('Token', token);
        localStorage.setItem('TokenExpiration', expirationTime.toString());
        
        // Check if token has expired
        if (Date.now() >= expirationTime) {
          this.authService.logout();
          const errorMsg = "Token has expired. Please log in again.";
          notify({
            message: errorMsg,
            width: 450,})
        } else {
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/admin/sidenav/showorder']);
          const message = "Login Successfully...!!!";
          notify({
            message,
            width: 450,
          }, 'success', 2000);
        }
        
        this.isLoading = false;
      } else {
        this.isLoading = false;
        const errorMsg = "Login Failed...!!!";
        notify({
          message: errorMsg,
          width: 450,
        }, 'error', 2000);
      }
    });
  }
  
  // Decode JWT token function
  decodeJwt(token: string) {
    const parts = token.split('.');
    const decoded = atob(parts[1]);  // Base64 decode the payload
    return JSON.parse(decoded);
  }

  get username(){
  return this.loginform.get('username')
} 
  get password(){
  return this.loginform.get('password')
}
 
isLoggedIn():any{
  return this.isLoggedIn;
}
get email() {
  return this.forgotPasswordForm.get('email');
}

onSubmit() {
  console.log('Email',this.forgotPasswordForm.value.email);
  this.router.navigate(['/admin/login']);
  
  if(this.forgotPasswordForm.valid){
    this.apiservice.SendRestPasswordLink(this.forgotPasswordForm.value.email).subscribe(
      response=>{
        console.log('Rest Password Link Send Successfully');
      },
      error =>{
        console.log('Error sending reset link', error);
      }
    )
  }
  this.popupVisible = false;
}
forgotPassword(){
  this.popupVisible = true;
}
@HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.adjustLayout();
  }

  adjustLayout() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Adjust grid height based on window height

    // Adjust popup size dynamically
    if (windowWidth < 768) {
      this.popupWidth = '90%';
      this.popupHeight = '80%';
    } else if (windowWidth < 1024) {
      this.popupWidth = '80%';
      this.popupHeight = '80%';
    } else {
      this.popupWidth = '60%';
      this.popupHeight = '70%';
    }
  }
}
