import { Component, OnInit } from '@angular/core';
import { VendorService } from '@svc/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from '../../../model/vendor.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  vendor:Vendor=new Vendor();
  title:string="Vendor Edit"
  constructor(private vendorSVC:VendorService, private router: Router, private route:ActivatedRoute ) { }

  edit(){
    console.log(this.vendor);
    this.vendorSVC.edit(this.vendor, this.vendor.id).subscribe(resp=>{
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
    this.route.params.subscribe(parms=>{
      this.vendorSVC.get(parms.id).subscribe(resp=> {
        this.vendor = resp as Vendor;
      })
    });
  }
    
}
