import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Request} from '../model/request.class';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url:string = "https://localhost:44306/api/request"
  constructor(private http:HttpClient) { }
  list():Observable<Request[]>{
    return this.http.get(this.url) as Observable<Request[]>;
  }
  listRev(id:number):Observable<Request[]>{
    return this.http.get('https://localhost:44306/api/getrev/'+id) as Observable<Request[]>;
  }
  get(id:number): Observable<Request>{
    return this.http.get(this.url +'/'+id) as Observable<Request>;
  }
 
  create(request:Request):Observable<any>{
    return this.http.post(this.url, request) as Observable<any>;

  }
  edit(id:number,request:Request):Observable<any>{
    return this.http.put(this.url+'/'+id, request) as Observable<any>;
  }
  delete(id:number):Observable<any>{
    return this.http.delete(this.url+'/'+id) as Observable<any>;
  }
 
  setApp(id:number):Observable<any>{
    return this.http.get('https://localhost:44306/api/setapp/'+id) as Observable<any>;
  }
  setRev(id:number):Observable<any>{
    return this.http.get('https://localhost:44306/api/setRev/'+id) as Observable<any>;
  }
  setRej(id:number, req:Request):Observable<any>{
    return this.http.put('https://localhost:44306/api/setRej/'+id, req) as Observable<any>;
  }
 
  
}
