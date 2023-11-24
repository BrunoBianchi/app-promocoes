import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
  public pages:any=this.router.url.split('/').filter((page)=>{return page!=''});
  public param :any = this.router.url.split('/')[this.pages.length];
  ngOnInit(): void {
    console.log(this.param);
  }
constructor(private router: Router) { }

}
