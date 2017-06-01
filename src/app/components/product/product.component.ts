import {Component, ViewChild, OnInit, Input} from '@angular/core';
import {DataTable, DataTableResource} from 'angular-2-data-table';

import {Router} from '@angular/router';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';
import {CartStore} from '../../store/cart.store';
import {User} from '../../registration/_models/index';
import {UserService} from '../../registration/_services/index';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  products: Product[];
  quantity: number;
  priceLimit = 100;

  currentUser: User;
  users: User[] = [];

  constructor(private productService: ProductService,
              private router: Router,
              private cartStore: CartStore,
              private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
    this.getProductData();
  }

  clickedProduct(product) {
    const link = ['/detail', product.id];
    this.router.navigate(link);
  }

  addToCart(product) {
    this.cartStore.addToCart(product, this.quantity || 1);
  }

  getProductData() {
    this.productService.getProducts().then(products => this.products = products);
  }

  rowColors(product) {
    if (product.year >= this.priceLimit) {return 'rgb(255, 255, 197)'; }
  }
}
