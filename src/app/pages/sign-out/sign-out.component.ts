import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {
  ngOnInit(): void {
    this.auth.signOut().then(()=>{ 
      localStorage.removeItem('user');
    this.router.navigateByUrl('sign-in');
    })
  }
constructor(private auth:AuthService,private router: Router){}
}
