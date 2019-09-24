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
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {
  title = 'RequestLine Create';
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
      this.reqSVC.get(parms.id).subscribe(jresp=> {
        this.request = jresp as Request;
      })
    });
  }
  btList(){
    this.requestLine.requestId=this.request.id;
    this.router.navigate(['/requestlines/'+this.requestLine.requestId]);
  }
  create() {
    if(this.requestLine.quantity <0){
      alert('Please enter a qauntity that is greater than 0');
    }else{
    this.requestLine.requestId=this.request.id;
    this.requestLine.productId=this.requestLine.product.id;
    this.requestLine.product=null;
    this.requestLine.request = null;
    
    this.rlSVC.create(this.requestLine).subscribe(
      resp => {
        this.requestLine = resp as RequestLine;
        this.router.navigate(['/requestlines/'+this.requestLine.requestId]);
    },
    err=>{
      console.log(err);
    });
  }
}
}
