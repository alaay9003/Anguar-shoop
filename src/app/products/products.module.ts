import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AllProductsComponent, ProductsDetailsComponent],
  imports: [CommonModule, BrowserModule, SharedModule],
})
export class ProductsModule {}
