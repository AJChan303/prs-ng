import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../model/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string = "https://localhost:44306/api/product"
  constructor(private http:HttpClient) { }
  list():Observable<Product[]>{
    return this.http.get(this.url) as Observable<Product[]>;
  }
  get(id:number): Observable<Product>{
    return this.http.get(this.url +'/'+id) as Observable<Product>;
  }
 
  create(product:Product):Observable<any>{
    return this.http.post(this.url, product) as Observable<any>;

  }
  edit(id:number,product:Product):Observable<any>{
    return this.http.put(this.url+'/'+id, product) as Observable<any>;
  }
  delete(id:number):Observable<any>{
    return this.http.delete(this.url+'/'+id) as Observable<any>;
  }

}


