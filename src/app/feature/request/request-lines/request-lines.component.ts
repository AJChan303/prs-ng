import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import {ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../../model/request.class';
import { RequestLineService } from '@svc/request-line.service';
import { Observable } from 'rxjs';
import { RequestLine } from '@model/request-line.class';


@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  request:Request = new Request();
  requestLines:RequestLine[];
  
  constructor(private requestSVC:RequestService, private router: Router,
               private route:ActivatedRoute, private rlSVC:RequestLineService ) { }
  title:string='Request Details';
  
  
  ngOnInit() {
    this.route.params.subscribe(parms=>{  
      this.requestSVC.get(parms.id).subscribe(resp=> {
        this.request = resp as Request;
      })
    })
    this.route.params.subscribe(parms=>{
      this.rlSVC.get(parms.id).subscribe(jresp=>{
        this.requestLines = jresp as RequestLine[];
      })
    })
    }
    review(){
      this.requestSVC.setRev(this.request.id).subscribe(ans=>{
        this.request = ans as Request;
        this.router.navigateByUrl('/request/list');
        // location.reload();
      });
    }
    remove(id:number){
      this.rlSVC.delete(id).subscribe(
        resp=>{
          this.router.navigateByUrl('/requestlines/'+this.request.id);
          this.ngOnInit();
        },
        err=>{
          console.log(err);
        }
      );
     
  }
}
  
  
  
