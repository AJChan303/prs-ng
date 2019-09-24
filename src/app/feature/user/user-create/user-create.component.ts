import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.class';
import { UserService } from '@svc/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user:User = new User();
  title:string= 'User-Create';
  constructor(private userSVC:UserService, private router:Router) { }
  create(){
    this.userSVC.create(this.user).subscribe(resp=>{
        //success
        this.router.navigateByUrl('/user/list');
    },
    err => {
      //error
      console.log(err);
    }
    );
  }
  

  ngOnInit() {
  }

}
