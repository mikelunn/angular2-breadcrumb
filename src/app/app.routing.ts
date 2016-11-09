/**
 * Created by complunm on 9/8/2016.
 */
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {CustomerComponent} from "./customer/customer.component";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";

const appRoutes : Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent, data:{title:'HOME'}},
  {path:'customer', component:CustomerComponent, data:{title:'CUSTOMER'}},
  {path:'customer-detail', component:CustomerDetailComponent, data:{title:'DETAIL'}}
]
export const routingProviders : any[] = [];
export const routes : ModuleWithProviders = RouterModule.forRoot(appRoutes);
