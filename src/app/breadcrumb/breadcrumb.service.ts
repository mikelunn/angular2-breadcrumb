

export class BreadcrumbService {
  routes = [];

  get(){
    return this.routes;
  }
  add(route:any){
    var isEmpty = this.routes.length === 0;
    let any = this.routes.filter(c=>route.url === c.url).length > 0;
    if(isEmpty){
      this.routes.push(route);
    }
    if(!any && !isEmpty ){
      this.routes.push(route);
    }

  }
  kill(index){
    var length = this.routes.length;
    this.routes.splice(index,length - index);
  }
}
