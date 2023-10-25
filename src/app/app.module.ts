import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { CartComponent } from './carts/components/cart/cart.component';
import { CartsModule } from './carts/carts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    ProductsModule,
    CartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
