import { Vendor } from './vendor.class';

export class Product {
    id:number;
    partNbr:string;
    name:string;
    price:number;
    unit:string;
    photoPath:string;
    vendorId:number;
    vendor:Vendor;
    

    constructor(id:number =0, partnbr:string ='', name:string ='',price:number=0,unit:string='',photopath:string= '', vendorid:number= 0,vendor:Vendor=new Vendor()){
        this.id = id;
        this.partNbr = partnbr;
        this.name=name;
        this.price=price;
        this.unit=unit;
        this.photoPath=photopath;
        this.vendorId=vendorid;
        this.vendor=vendor;

    }
}
