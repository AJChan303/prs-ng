import { Component, OnInit } from '@angular/core';
import { VendorService } from '@svc/vendor.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '@model/vendor.class';


@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  vendor:Vendor = new Vendor();
  constructor(private vendorSVC:VendorService, private router: Router, private route:ActivatedRoute ) { }

  
  
  ngOnInit() {
    this.route.params.subscribe(parms=>{
      this.vendorSVC.get(parms.id).subscribe(resp=> {
        this.vendor = resp as Vendor;
        console.log('vendor detail: ' +this.vendor.id);
        
      })
    });
    }
    remove(){
      console.log(this.vendor.id);
      this.vendorSVC.delete(this.vendor.id).subscribe(
        resp=>{
          this.router.navigateByUrl('/vendor/list');
        },
        err=>{
          console.log(err);
        }
      );
    }
  }
  
  
  