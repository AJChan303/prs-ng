import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import {ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../../model/request.class';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request:Request = new Request();
  constructor(private requestSVC:RequestService, private router: Router, private route:ActivatedRoute ) { }
  title:string='Request Details';
  
  
  ngOnInit() {
    this.route.params.subscribe(parms=>{
      this.requestSVC.get(parms.id).subscribe(resp=> {
        this.request = resp as Request;
        
      })
    });
    }
    remove(){
      this.requestSVC.delete(this.request.id).subscribe(
        resp=>{
          this.router.navigateByUrl('/request/list');
        },
        err=>{
          console.log(err);
        }
      );
    }
  }
  
  
  
