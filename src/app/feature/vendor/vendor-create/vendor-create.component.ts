import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Vendor}from '../../../model/vendor.class';
import {VendorService} from '../../../service/vendor.service'

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  vendor:Vendor =new Vendor();
  title:string='Create Vendor';
  constructor(private router:Router, private vendorSVC:VendorService) { }
  create(){
    this.vendorSVC.create(this.vendor).subscribe(resp=>{
        //success
        this.router.navigateByUrl('/vendor/list');
    },
    err => {
      //error
      console.log(err);
    }
    );
  }

  ngOnInit() {
  }
  


}
