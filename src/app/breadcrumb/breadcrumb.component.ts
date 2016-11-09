import { Component, OnInit } from '@angular/core';
import {BreadcrumbService} from "./breadcrumb.service";
import {Router, ActivatedRoute, NavigationEnd} from "@angular/router";
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  routes : Array<Object>;
  constructor(private breadcrumbService : BreadcrumbService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.initRoutes();

  }

  goTo(url:string){
    var idx = this.routes.map((x:any)=>{return x.url}).indexOf(url);
    this.breadcrumbService.kill(idx);
    this.routes = this.breadcrumbService.get();
    this.router.navigateByUrl(url);
  }

  private initRoutes = () => this.router.events
    .filter(event=>event instanceof NavigationEnd)
    .subscribe(event=>{
      this.routes = [];
      let currentRoute = this.route.root;
      do{
        let childRoutes = currentRoute.children;
        let url = '';
        let label = '';
        currentRoute = null;
        childRoutes.forEach(route=>{
          if(route.outlet === 'primary'){
            let routeSnapshot = route.snapshot;
            url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
            label = route.snapshot.data['title']
              ? route.snapshot.data['title']
              : url.split("/").pop().charAt(0).toUpperCase() + url.split("/").pop().slice(1),
            this.breadcrumbService.add({
              url:url,
              label:label
            })
            currentRoute = route;
          }
        })

      }
      while(currentRoute);
      this.routes = this.breadcrumbService.get();
    })

}
