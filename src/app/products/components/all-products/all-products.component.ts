import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  public products: any[] = [];
  Categories: any[] = [];
  cartProducts: any[] = [];
  constructor(private service: ProductsService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
    console.log(this.products);
  }

  getProducts() {
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        //console.log(res);
      },
      (error) => {
        alert('error');
      }
    );
  }

  getAllCategory() {
    this.service.getAllCategory().subscribe(
      (res: any) => {
        this.Categories = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public getByCategory(event: any) {
    let cateory = event.target.value;
    if (event.target.value == 0) {
      return this.getProducts();
    }
    console.log(cateory);
    this.service.getByCategory(cateory).subscribe(
      (res: any) => {
        console.log(res);
        this.products = res;
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  public addToCart(event: any) {
    //console.log(event);
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find(
        (item) => item.item.id == event.item.id
      );
      if (exist) {
        alert('item is already inserted');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
