import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {RequestLine} from '../model/request-line.class'
@Injectable({
  providedIn: 'root'
})
export class RequestLineService {
  url:string = "https://localhost:44306/api/requestline"
  constructor(private http:HttpClient) { }
  // list():Observable<RequestLine[]>{
  //   return this.http.get(this.url) as Observable<RequestLine[]>;
  // }
  get(id:number): Observable<RequestLine[]>{
    return this.http.get(this.url +'/'+id) as Observable<RequestLine[]>;
  }
  getOne(id:number): Observable<RequestLine>{
    return this.http.get(this.url +'/id/'+id) as Observable<RequestLine>;
  }
  
 
  create(request:RequestLine):Observable<any>{
    return this.http.post(this.url, request) as Observable<any>;

  }
  edit(id:number,request:RequestLine):Observable<any>{
    return this.http.put(this.url+'/'+id, request) as Observable<any>;
  }
  delete(id:number):Observable<any>{
    return this.http.delete(this.url+'/'+id) as Observable<any>;
  }
  
}
