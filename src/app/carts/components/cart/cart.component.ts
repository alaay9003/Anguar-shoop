import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: any = [];
  total: any = 0;
  success: boolean = false;
  constructor(private service: CartsService) {}
  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotle();
  }
  getCartTotle() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total +=
        this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }
  setCartQuantity() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotle();
  }
  deleteCartItem(item: number) {
    this.cartProducts = this.cartProducts.filter(
      (obj: any) => obj.item.id != item
    );
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotle();
  }
  clearCartProducts() {
    this.cartProducts = [];
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotle();
  }
  addCart() {
    let products = this.cartProducts.map((item: any) => {
      return { productId: item.item.id, quantity: item.quantity };
    });
    let model = {
      userId: 5,
      date: new Date(),
      products: products,
    };
    console.log(model);

    this.service.createNewCart(model).subscribe(
      (res: any) => {
        this.success = true;
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
