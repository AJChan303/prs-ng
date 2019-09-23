import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import {ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../../model/request.class';
import { RequestLineService } from '@svc/request-line.service';
import { Observable } from 'rxjs';
import { RequestLine } from '@model/request-line.class';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent implements OnInit {
  request:Request = new Request();
  requestLines:RequestLine[];
  
  
  constructor(private requestSVC:RequestService, private router: Router,
               private route:ActivatedRoute, private rlSVC:RequestLineService ) { }
  title:string='Request Details';
  approve(){
    this.requestSVC.setApp(this.request.id).subscribe(ans=>{
      this.request = ans as Request;
      location.reload();
    });
   
  }
  reject(){
    this.requestSVC.setRej(this.request.id).subscribe(ans=>{
      this.request = ans as Request;
    });
    this.requestSVC.edit(this.request.id, this.request).subscribe(ans=>{
      this.request = ans as Request;
    });
    location.reload();
  }

  
  ngOnInit() {
    this.route.params.subscribe(parms=>{  
      this.requestSVC.get(parms.id).subscribe(resp=> {
        this.request = resp as Request;
        console.log('request detail: ' +this.request.id);
      })
    })
    this.route.params.subscribe(parms=>{
      this.rlSVC.get(parms.id).subscribe(jresp=>{
        this.requestLines = jresp as RequestLine[];
        console.log(this.requestLines);
      })
    })
    }
  //   remove(id:number){
  //     console.log(id);
  //     this.rlSVC.delete(id).subscribe(
  //       resp=>{
  //         this.router.navigateByUrl('/requestlines/'+this.request.id);
  //         location.reload();
  //       },
  //       err=>{
  //         console.log(err);
  //       }
  //     );
     
  // }
}
  
  
  
