import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   template: '<h1>Hello {{name}}</h1>',
// })
// export class AppComponent  { name = 'World new'; }

// @Component({ 
//    selector: 'demo-app', 
//    template: '<div><h1>{{appTitle}}</h1><div>To Tutorials Point</div></div>'
// }) 

@Component({ 
   selector: 'demo-app', 
   templateUrl: 'app/app.component.html'  
})

export class AppComponent { 
   appTitle: string = 'Welcome'; 
   appStatus:boolean =true;
    appList: any[] = [ { 
      "ID": "1", 
      "Name" : "One" 
   }, 

   { 
      "ID": "2", 
      "Name" : "Two"  
   } ]; 
}

// import { Component } from '@angular/core'; 
// import { IProduct } from './product'; 
// import { ProductService } from './products.service'; 
// //import { appService } from './app.service';  

// import { Http , Response } from '@angular/http'; 
// import { Observable } from 'rxjs/Observable'; 
// import 'rxjs/add/operator/map';  

// @Component ({ 
//    selector: 'demo-app',  
//    template: '<div>Hello</div>', 
//    providers: [ProductService] 
// })  

// export   class   AppComponent  {  
//    iproducts: IProduct[]; 
//    constructor(private _product: ProductService){ 
//    } 
//    ngOnInit() : void { 
//       this._product.getproducts() 
//       .subscribe(iproducts => this.iproducts = iproducts); 
//    } 
// }