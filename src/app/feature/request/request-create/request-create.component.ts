import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { SystemService } from '@svc/system.service';
import { Router, ActivatedRoute } from '@angular/router';
import{Request}from '../../../model/request.class';
import { HttpClient } from '@angular/common/http';
import { User } from '@model/user.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  title:string="Request Create";
  // request:Request;
  user:User;
  deliveryMeth:string[]=['pickup', 'delivery','hot air balloon', 'parachuting man'];
  request:Request = new Request(0,'','', '','',0,0,this.user,0,'');
  constructor(private reqSVC:RequestService, private sysSVC:SystemService,
    private router:Router, private route:ActivatedRoute,private http:HttpClient) { }

    create() {
      this.request.userId=this.user.id;
      this.request.user=null;
      this.request.dateRequested=null;
      this.request.status ="new";
      
      this.reqSVC.create(this.request).subscribe(
        resp => {
          this.request = resp as Request;
          this.router.navigate(['/requestlines/'+resp.id]);
      },
      err=>{
        console.log(err);
      });
    }
    ngOnInit() {
      this.user = this.sysSVC.data.user.instance;
    }
  }


