import { Component, OnInit } from '@angular/core';
import { UserService } from '@svc/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userSVC:UserService, private router:Router, private route:ActivatedRoute) { }
  // login(){
  //   this.userSVC.login(uname, pwd).subscribe()
  // }
  ngOnInit() {
  }

}
