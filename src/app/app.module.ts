import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import{HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SortPipe} from './pipe/sort.pipe';

import { MenuComponent } from './core/menu/menu.component';

import {UserService} from './service/user.service'
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';

import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    VendorListComponent,
    SortPipe,
    MenuComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    UserLoginComponent,
    VendorEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [ UserService,
  HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
