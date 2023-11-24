import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/users/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public Users:Array<{name:string,email:string,uid:string}> = [];
  public UsersList:Array<{name:string,email:string,uid:string}> = [];
  public deletar(uid:string) {
    this.userService.removeUser(uid).then(()=>{
      this.Users = this.Users.filter(user=>{return user.uid != uid});

    })
  }
  public search(value: string) {
    this.Users = this.UsersList.filter((user) => {return user.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())}); 
  }
   async ngOnInit() {
    await this.userService.Users.then(users=>{
      users.forEach(user=>{
        this.Users.push({
          name:user.get('name'),
          email:user.get('email'),
          uid:user.id
        })
        this.UsersList.push({
          name:user.get('name'),
          email:user.get('email'),
          uid:user.id
        })
      })
     })

    }
    constructor(private userService:UserService,private router:Router) {}
}
