import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestLine } from '../../../model/request-line.class';
import { RequestLineService } from '../../../service/request-line.service';
import { Product } from '../../../model/product.class';
import { ProductService } from '../../../service/product.service';
import {Vendor} from '../../../model/vendor.class'
import { RequestService } from '@svc/request.service';
import{Request} from '../../../model/request.class'
@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {
  ///I'm sure some of these properties don't need to be here
  title = 'RequestLine Edit';
  vendor: Vendor = new Vendor();
  // vendor: Vendor = new Vendor(0, '', 'Loading...', '', '', '', '', '', '');
  product: Product = new Product();
  // product: Product = new Product(0, '', 'Loading...', 0, '', '', 0, this.vendor);
  request:Request;
  requestLine: RequestLine = new RequestLine();
  // requestLine: RequestLine = new RequestLine(0,this.request.id, 0, 0,this.product );
  products: Product[] = [this.product];

  constructor(private reqSVC: RequestService, private prodSVC: ProductService,
               private router: Router,private route:ActivatedRoute,
                private rlSVC:RequestLineService) { }

  ngOnInit() {
    this.prodSVC.list().subscribe(resp => {
      this.products = resp as Product[];
    }); 
    this.route.params.subscribe(parms=>{
      this.rlSVC.getOne(parms.id).subscribe(jresp=>
        this.requestLine= jresp as RequestLine)
    })
    // this.route.params.subscribe(parms=>{  
    //   this.reqSVC.get(parms.id).subscribe(jresp=> {
    //     this.request = jresp as Request;
    //     console.log(this.request);
    //   })
    // });
  }
  btList(){
    this.requestLine.requestId=this.request.id;
    this.router.navigate(['/requestlines/'+this.requestLine.requestId]);
  }
  edit() {
    if(this.requestLine.quantity <0){
    alert('Please enter a qauntity that is greater than 0');
  }else{
    // this.requestLine.requestId=this.request.id;
   var rid = this.requestLine.requestId;
    this.requestLine.productId=this.requestLine.product.id;
    this.requestLine.product=null;
    this.requestLine.request = null;
    
    this.rlSVC.edit(this.requestLine.id, this.requestLine).subscribe(
      resp => {
        this.requestLine = resp as RequestLine;
        this.router.navigate(['/requestlines/'+rid]);
    },
    err=>{
      console.log(err);
    });
  }
}
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }
}
