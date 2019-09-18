import { Component, OnInit } from '@angular/core';
import { User } from '@model/user.class';
import { UserService } from '@svc/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user:User=new User();
  title:string ='User-Detail';
  constructor(private userSVC:UserService, private router:Router, private route:ActivatedRoute) {

   }

   remove(){
    this.userSVC.delete(this.user.id).subscribe(
      resp=>{
        this.router.navigateByUrl('/user/list');
      },
      err=>{
        console.log('error deleting user');
        console.log(err);
      }
    );
  }

  ngOnInit() {
    //get the id from the request, get the associated user record
    this.route.params.subscribe(parms=>{
      this.userSVC.get(parms.id).subscribe(resp=> {
        this.user = resp as User;
    })
  });
  }
}
