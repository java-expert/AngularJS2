angularjs2 start

Features of Angular 2

Following are the key features of Angular 2 −

    Components − The earlier version of Angular had a focus of Controllers but now has changed the focus to having components over controllers. Components help to build the applications into many modules. This helps in better maintaining the application over a period of time.

    TypeScript − The newer version of Angular is based on TypeScript. This is a superset of JavaScript and is maintained by Microsoft.

    Services − Services are a set of code that can be shared by different components of an application. So for example if you had a data component that picked data from a database, you could have it as a shared service that could be used across multiple applications.

Components of Angular 2

	Angular 2 has the following components −

    Modules − This is used to break up the application into logical pieces of code. Each piece of code or module is designed to perform a single task.

    Component − This can be used to bring the modules together.

    Templates − This is used to define the views of an Angular JS application.

    Metadata − This can be used to add more data to an Angular JS class.

    Service − This is used to create components which can be shared across the entire application.

Modules are used in Angular JS to put logical boundaries in your application. Hence, instead of coding everything into one application,
you can instead build everything into separate modules to separate the functionality of your application.

Each application is made up of feature modules where each module has a separate feature of the application.
Each Angular feature module can then have multiple components to separate the functionality.

=======================================================================================================
Components are a logical piece of code for Angular JS application. A Component consists of the following −

    Template − This is used to render the view for the application. This contains the HTML that needs to be rendered in the application. This part also includes the binding and directives.

    Class − This is like a class defined in any language such as C. This contains properties and methods. This has the code which is used to support the view. It is defined in TypeScript.

    Metadata − This has the extra data defined for the Angular class. It is defined with a decorator.
............................................................................................................

CLASS>>>>>

export class AppComponent { 
   appTitle: string = 'Welcome'; 
}

In the example, the following things need to be noted −

    We are defining a class called AppComponent.

    The export keyword is used so that the component can be used in other modules in the Angular JS application.

    appTitle is the name of the property.

    The property is given the type of string.

    The property is given a value of ‘Welcome’.

..............................................................................................................................

TEMPLATE

template: ' 
   <div>
      <h1>{{appTitle}}</h1> 
      <div>To Tutorials Point</div> 
   </div> 
' 
}) 


................................................................................................................................
import { Component } from '@angular/core'; 
@Component({ 
   selector: 'demo-app', 
   template: ' 
      <div>
         <h1>{{appTitle}}</h1> 
         <div>To Tutorials Point</div> 
      </div> 
   ' 
}) 

export class AppComponent { 
   appTitle: string = 'Welcome'; 
}

In the above example, the following things need to be noted −

    We are using the import keyword to import the ‘Component’ decorator from the angular/core module.

    We are then using the decorator to define a component.

    The component has a selector called ‘demo-app’. This is nothing but our custom html tag which can be used in our main html page.
	...............................................................................................................................
	
	<body> 
   <demo-app></demo-app> 
</body>
=====================================================================================================================================

go to the app.module.ts folder in your app folder. This is known as the root module class.