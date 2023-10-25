import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private http: HttpClient) {}

  createNewCart(model: any) {
    return this.http.post(environment.apiUrl + 'carts', model);
  }
}
