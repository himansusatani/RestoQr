import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';
import notify from 'devextreme/ui/notify';
import { ResetPassword } from 'src/app/Services/reset-password/reset-password.module';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  resetPasswordForm: FormGroup;
  emailToReset!: string;
  emailToken!: string;
  resetPasswordObj = new ResetPassword()
  constructor(private fb: FormBuilder,private activatedRoute: ActivatedRoute, private apiService : ApiCallService,private router :Router) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit():void{
    this.activatedRoute.queryParams.subscribe(val =>{
      this.emailToReset = val['email'];
      let uriToken =  val['code'];
      console.log(val['code'],'val');
      
      this.emailToken = uriToken.replace(/ /g, '+');
      console.log(this.emailToken,'token');
    })
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }


  
  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.resetPasswordObj.email = this.emailToReset;
      this.resetPasswordObj.newPassword = this.resetPasswordForm.value.password;
      this.resetPasswordObj.confirmPassword = this.resetPasswordForm.value.confirmPassword;
      this.resetPasswordObj.emailToken = this.emailToken;

      this.apiService.ResetPassword(this.resetPasswordObj).subscribe({
        
        next:(data)=>{
          const message = data.message;
        notify({
          message,
          width: 450,
        },
          'success',
          2000);
          this.router.navigate(['/admin/login']);
        },
        error:(err)=>{
          const message = "Something Went Wrong";
        notify({
          message,
          width: 450,
        },
          'error',
          2000);
        }
      })
    }
  }

  get password() {
    return this.resetPasswordForm.get('password');
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }

}
