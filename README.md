# Best Practices
## Scaffold and configure a single-page application with Angular
 - Installation Instructions:
	Run `npm install` to install dependencies
	Run `ng serve` to start application

## Document the project in the README
	- Project Description: Single-Page Angular web store application, including products, a cart, orderform and confirmation.
	- Installation instructions: see above.

## Organize and write clean code

## Design for user experience

## Use CSS to style the application
	- Used CSS styles included in starter code

# Components

## Fetch and use data from an external API
	- product service uses HttpClient to read data from provided data.json in src/assets
	- *ngFor loops over products in product-list component, using products component to control the output
	- product list shows photo, name, and price.

## Create a logical heirarchy of components

# Data Flow
## Use decorators to pass data between parent and child components
## Use a service to pass data between sibling components
	- Product service imports list of products from the supplied JSON file.
	- Cart service stores cart data and enables sharing with product-item
# Routing
## Use Angular routing in templates
	- `<router-outlet>` added to app.component.html
	- `routerLink` used in product-item component and header component
## Set up and configure the app routing module
	- Imported AppRoutingModule to app.module.ts
	- Added paths and component routes to app-routing.module