import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menu-item.class';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems:MenuItem[]=[
    new MenuItem('Users', '/user/list', 'User List'),
    new MenuItem('Vendors', '/vendor/list', 'Vendor List'),
    new MenuItem('Products', '/product/list', 'Product List'),
    // new MenuItem('Home', '/home', 'Home'),
    new MenuItem('Request', '/request/list', 'Request List'),
    new MenuItem('Request Review', '/review/list', 'Request Review'),
    new MenuItem('Login', '/user/login', 'Authenticate')
  ];
  constructor() { }
  
  ngOnInit() {
  
  }

}
