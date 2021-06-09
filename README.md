# Best Practices
## Scaffold and configure a single-page application with Angular
 - Installation Instructions:
	Run `npm install` to install dependencies
	Run `ng serve` to start application

## Document the project in the README
	- Project Description: Single-Page Angular web store application, including products, a cart, order form, and confirmation.
	- Installation instructions: see above.

## Organize and write clean code
	- Functional Components are in the src/app/components folder
	- Layout components are in the src/app/layout folder
	- Models in the src/app/models folder
	- Services in the src/app/services folder
	- JSON data file in hte src/assets folder
## Design for user experience
	- Cart page has total for cart contents, and is updated dynamically if quantities are updated in the cart.
	- Inputs are validated in the cart, and on the product list and product details pages. Add to cart or submit buttons will be inacivated until valid inputs are entered.
	- An alert is generated when a product is added to the cart.
	- Product details page shows product information.
	- Changing the quantity of an item in the cart to 0 or a negative number will remove it from the cart immediately.
	- Order confirmation is shown after submitting an order including the fullName and total of the cart.

## Use CSS to style the application
	- Used CSS styles included in starter code as well as ngbootstrap 

# Components
## Fetch and use data from an external API
	- Product service uses HttpClient to read data from provided data.json in src/assets
	- *ngFor loops over products in product-list component, using products component to control the output
	- Product list shows photo, name, and price.

## Create a logical heirarchy of components

## Collect input from the user using controlled form elements and Angular events
	- ngModel used to bind form inputs
	- ngModelChange used to detect changes in cart quantities and delete item and/or update cart total.
## Use Angular event bindings
	- Angular event binding ngSubmit used to detect form submission

## Create and use custom TypeScript models
	- Custom models for products, cart items, and orders. Located in the src/app/models

# Data Flow
## Use decorators to pass data between parent and child components
	- @Input decorator used in product-item component to take input from parent product-list for displaying product items.
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