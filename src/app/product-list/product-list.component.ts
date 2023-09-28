import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Observable<Product[]>;
  
  constructor(
    private productsService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
