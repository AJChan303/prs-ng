import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vendor} from '../model/vendor.class'

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  url:string = "https://localhost:44306/api/vendor"

  constructor(private http: HttpClient) { }
  list():Observable<Vendor[]>{
    return this.http.get(this.url) as Observable<Vendor[]>;
  }
  get(id:number): Observable<Vendor>{
    return this.http.get(this.url +'/'+id) as Observable<Vendor>;
  }
 
  create(vendor:Vendor):Observable<any>{
    return this.http.post(this.url, vendor) as Observable<any>;

  }
  edit(vendor:Vendor, id:number):Observable<any>{
    return this.http.put(this.url+'/'+id, vendor) as Observable<any>;
  }
  delete(id:number):Observable<any>{
    return this.http.delete(this.url+'/'+id) as Observable<any>;
  }

}
