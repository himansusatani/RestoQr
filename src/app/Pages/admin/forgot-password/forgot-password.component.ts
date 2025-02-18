import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@microsoft/signalr';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router : Router, private apiService: ApiCallService) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  onSubmit() {
    console.log('Email',this.forgotPasswordForm.value.email);
    this.router.navigate(['/login']);
    // if (this.forgotPasswordForm.valid) {
    //   this.http
    //     .post('http://localhost:5000/api/auth/forgot-password', {
    //       email: this.forgotPasswordForm.value.email
    //     })
    //     .subscribe(
    //       response => {
    //         console.log('Reset link sent successfully');
    //       },
    //       error => {
    //         console.error('Error sending reset link', error);
    //       }
    //     );
    // }
    if(this.forgotPasswordForm.valid){
      this.apiService.SendRestPasswordLink(this.forgotPasswordForm.value.email).subscribe(
        response=>{
          console.log('Rest Password Link Send Successfully');
        },
        error =>{
          console.log('Error sending reset link', error);
        }
      )
    }
  }
}
