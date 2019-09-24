import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.class';
import { UserService } from '@svc/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user:User=new User();
  title:string= 'User-Edit';
  constructor(private userSVC:UserService, private router:Router, private route:ActivatedRoute) { }
  edit(){
    this.userSVC.edit(this.user).subscribe(resp=>{
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
    this.route.params.subscribe(parms=>{
      this.userSVC.get(parms.id).subscribe(resp=> {
        this.user = resp as User;
  })

  });
}
}
