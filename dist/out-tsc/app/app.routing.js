import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CustomerComponent } from "./customer/customer.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: 'HOME' } },
    { path: 'customer', component: CustomerComponent, data: { title: 'CUSTOMER' } },
    { path: 'customer-detail', component: CustomerDetailComponent, data: { title: 'DETAIL' } }
];
export var routingProviders = [];
export var routes = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=C:/Users/complunm/git/restore/angular2-breadcrumb/src/app/app.routing.js.map