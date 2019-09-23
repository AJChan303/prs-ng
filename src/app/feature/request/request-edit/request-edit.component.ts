import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../../service/request.service';
import { Request } from '../../../model/request.class';
import {  UserService } from '../../../service/user.service';
import {  User } from '../../../model/user.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  title = 'Request Edit';
  id: number;
  request: Request;
  users: User[];
  deliveryMeth:string[]=['pickup', 'delivery','hot air balloon', 'parachuting man'];

  constructor(private reqSvc: RequestService, private userSvc: UserService,
     private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params.id);
    this.reqSvc.get(this.id).subscribe(resp => {
      this.request = resp as Request;
      this.userSvc.list().subscribe(jresp => {
        this.users = jresp as User[];
      });
    });
  }

  edit() {
    this.request.userId=this.request.user.id;
    this.request.user = null;
    this.reqSvc.edit(this.request.id,this.request).subscribe(jr => {
      this.request = jr as Request;
      this.router.navigate(['/request/list']);
    });
  }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }
}
