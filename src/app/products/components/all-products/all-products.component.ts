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
  constructor(private service: ProductsService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
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
}
