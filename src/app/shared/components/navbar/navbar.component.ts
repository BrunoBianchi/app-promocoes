import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user: any = null;
  constructor(private auth:AuthService) { }
  ngOnInit(): void {
    this.user = this.auth.user;
    console.log(this.user)
  }
}
