import { HttpClient } from '@angular/common/http'
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    return this.http.get<Product[]>
      ('/assets/products.json');
  }

}
