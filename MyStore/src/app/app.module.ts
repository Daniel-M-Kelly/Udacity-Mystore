import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './layout/header/header.component';


//Flexbox CSS for Angular
import { FlexLayoutModule } from '@angular/flex-layout';

//HTTP Client module for reading local JSON file
import { HttpClientModule } from '@angular/common/http';

//Bootstrap 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Forms
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FlexLayoutModule,
	HttpClientModule,
	NgbModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
