import { Product } from './product.class';
import{Request} from './request.class'
export class RequestLine {
    id:number;
    requestId:number;
    productId:number;
    quantity:number;
    product:Product;
    request:Request;
    constructor(id:number=0,rId:number=0,pId:number=0,
                qty:number=0,prod:Product=new Product(),
                req:Request=new Request()){
                    this.id=id;
                    this.requestId=rId;
                    this.productId=pId;
                    this.quantity=qty;
                    this.product=prod;
                    this.request=req;
                    
                }
}

