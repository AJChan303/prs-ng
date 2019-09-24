import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';
import { User } from '../../../model/user.class';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  message: any;
  user: User = new User(0, '', '', '', '', '', '', false, false);

  authenticate() {
    this.userSvc.login(this.user).subscribe(resp => {
        this.user =resp as User;
        this.sysSvc.data.user.instance = this.user;
        this.sysSvc.data.user.loggedIn = true;
        this.router.navigateByUrl('/request/list');
      
    },err =>{this.message ='Login Authentication Issue';}
    );}
 

  constructor(private userSvc: UserService, private sysSvc: SystemService, private router: Router) { }

  ngOnInit() {
    this.user.username = "ServerAdmin";
    this.user.password = 'ServerPassword';
  }

}
