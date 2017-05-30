import {Component, ViewChild, OnInit, Input} from '@angular/core';
import {DataTable, DataTableResource} from 'angular-2-data-table';

import {Router} from '@angular/router';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';
import {CartStore} from '../../store/cart.store';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  @ViewChild(DataTable) carsTable: DataTable;
  @Input() quantity: number;
  products: Product[];

  constructor(private productService: ProductService, private router: Router, private cartStore: CartStore) {
  }

  ngOnInit(): void {
    this.getProductData();
  }

  clickedProduct(product) {
    const link = ['/detail', product.id];
    this.router.navigate(link);
  }

  addToCart(product) {
    console.log('weszlo');
    // this.quantity = ile;

    this.cartStore.addToCart(product, this.quantity || 1);
  }

  getProductData() {
    this.productService.getProducts().then(products => this.products = products);
  }
}
