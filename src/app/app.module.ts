import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BreadcrumbModule} from "./breadcrumb/breadcrumb.module";
import {RouterModule} from "@angular/router";
import {routes, routingProviders} from "./app.routing";
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BreadcrumbModule,
    RouterModule,
    routes
  ],
  providers: [routingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
