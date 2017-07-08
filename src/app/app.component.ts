import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   template: '<h1>Hello {{name}}</h1>',
// })
// export class AppComponent  { name = 'World new'; }

@Component({ 
   selector: 'demo-app', 
   template: '<div><h1>{{appTitle}}</h1><div>To Tutorials Point</div></div>'
}) 
export class AppComponent { 
   appTitle: string = 'Welcome'; 
}