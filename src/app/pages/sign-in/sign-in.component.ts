import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent {
  
  public errorMsg!:string;
  public profileForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });


  public signIn() {
    if(this.profileForm.value['email'] != "bruno2002.raiado@gmail.com" ) {
      this.errorMsg = "Email ou senha incorretos";
      return;
    }else {
      this.auth.signIn(this.profileForm.value['email'],this.profileForm.value['password']).then((user:any)=>{
        localStorage.setItem('user',JSON.stringify(user.user));
        this.router.navigateByUrl('dashboard/promocoes');
      }).catch((err:any)=>{ 
        if(err) this.errorMsg = err.message;
      })
    }

  }

  constructor(private formBuilder:FormBuilder,private auth:AuthService,private router:Router){}
}
