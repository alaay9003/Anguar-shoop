import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(environment.apiUrl + 'products');
  }

  getAllCategory() {
    return this.http.get(environment.apiUrl + 'products/categories');
  }
  getByCategory(category: string) {
    return this.http.get(environment.apiUrl + 'products/category/' + category);
  }
  getProductById(id: any) {
    return this.http.get(environment.apiUrl + 'products/' + id);
  }
}
