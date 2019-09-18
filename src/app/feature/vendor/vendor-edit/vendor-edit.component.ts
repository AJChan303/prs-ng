import { Component, OnInit } from '@angular/core';
import { VendorService } from '@svc/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from '@model/vendor.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  vendor:Vendor=new Vendor();
  constructor(private vendorSVC:VendorService, private router: Router, private route:ActivatedRoute ) { }

  edit(){
    this.vendorSVC.edit(this.vendor).subscribe(resp=>{
        //success
        console.log(resp);
        this.router.navigateByUrl('/user/list');
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
