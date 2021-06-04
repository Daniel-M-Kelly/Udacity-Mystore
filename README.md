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