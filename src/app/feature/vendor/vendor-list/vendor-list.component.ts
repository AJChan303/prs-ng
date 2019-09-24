import { Component, OnInit } from '@angular/core';


import {Vendor} from '../../../model/vendor.class';
import {VendorService} from '../../../service/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors:Vendor[];
  sortCriteria = 'name';
  sortOrder ='asc';
  title='Vendors'
  constructor(private VendorSvc:VendorService) { }
   sortBy(column:string):void{
    
    
    if(this.sortCriteria===column){
      this.sortOrder=(this.sortOrder==='asc'? 'desc' : 'asc');
    }else{
      this.sortCriteria=column;
      this.sortOrder='asc';
    }
  }
//   sortData(sort: Sort) {
//     const data = this.desserts.slice();
//     if (!sort.active || sort.direction === '') {
//       this.sortedData = data;
//       return;
//     }

//     this.sortedData = data.sort((a, b) => {
//       const isAsc = sort.direction === 'asc';
//       switch (sort.active) {
//         case 'name': return compare(a.name, b.name, isAsc);
//         case 'calories': return compare(a.calories, b.calories, isAsc);
//         case 'fat': return compare(a.fat, b.fat, isAsc);
//         case 'carbs': return compare(a.carbs, b.carbs, isAsc);
//         case 'protein': return compare(a.protein, b.protein, isAsc);
//         default: return 0;
//       }
//     });
//   }
// }

// function compare(a: number | string, b: number | string, isAsc: boolean) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }

  ngOnInit() {
    this.VendorSvc.list().subscribe(
      resp =>{
        this.vendors = resp;
      }
    );
  }

}

