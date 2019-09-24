import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  userLoggedIn:boolean=false;
data={
  about:'System Service',
  user:{
    loggedIn:false,
    instance:null
  }
}
  constructor() { }
  loggedIn(){
    if(this.data.user.loggedIn=true){
      this.userLoggedIn=true;
    }
  }
}