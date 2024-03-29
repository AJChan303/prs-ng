import { Component, OnInit } from '@angular/core';

import{UserService} from '@svc/user.service';
import {User} from '../../../model/user.class';
import { SystemService } from '@svc/system.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users:User[];
    sortCriteria ='';
    sortOrder='asc'
    title:string = "Users";
    loggedInUser:User;
  constructor(
    private userSvc:UserService,
    private sysSVC:SystemService
  ) { }

  sortBy(column:string):void{
    
    
    if(this.sortCriteria===column){
      this.sortOrder=(this.sortOrder==='asc'? 'desc' : 'asc');
    }else{
      this.sortCriteria=column;
      this.sortOrder='asc';
    }

  }
  ngOnInit() {
    //check sys svc for logged in user
    this.loggedInUser=this.sysSVC.data.user.instance;
    //populate list of users
    this.userSvc.list().subscribe(
      resp =>{
        this.users = resp;
      }
    );
  }

}
