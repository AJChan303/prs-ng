import { Component, OnInit } from '@angular/core';
import { ProductService } from '@svc/product.service';
import {ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../model/product.class';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product = new Product();
  constructor(private productSVC:ProductService, private router: Router, private route:ActivatedRoute ) { }
  title:string='Product Details';
  
  
  ngOnInit() {
    this.route.params.subscribe(parms=>{
      this.productSVC.get(parms.id).subscribe(resp=> {
        this.product = resp as Product;
        
      })
    });
    }
    remove(){
      this.productSVC.delete(this.product.id).subscribe(
        resp=>{
          this.router.navigateByUrl('/product/list');
        },
        err=>{
          console.log(err);
        }
      );
    }
  }
  
  
  
