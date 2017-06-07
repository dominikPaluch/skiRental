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
  quantity: number[] = [];
  priceLimit = 100;

  currentUser: User;
  users: User[] = [];

  constructor(private productService: ProductService,
              private router: Router,
              private cartStore: CartStore,
              private userService: UserService) {

      router.events.subscribe(() => {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      });
  }

  ngOnInit(): void {
    this.getProductData();

    for(var i=1; i<this.quantity.length; i++){
      this.quantity[i] = 1;
    }
  }

  clickedProduct(product) {
    const link = ['/detail', product.id];
    this.router.navigate(link);
  }

  addToCart(product) {
    this.cartStore.addToCart(product, this.quantity[product.id] || 1);
    console.log("addToCart() invoked, quantity: "+this.quantity[product.id]);
  }

  getProductData() {
    this.productService.getProducts().then(products => {this.products = products;
                                                        this.products.length = products.length;
                                                        this.quantity.length = products.length;});
  }

  rowColors(product) {
    if (product.year >= this.priceLimit) {return 'rgb(255, 255, 197)'; }
  }

   isFiler = false;

  filter() {
    this.isFiler = true;
    this.productService.getNarty160180().then(products => this.products = products);
  }

  showAll() {
    this.isFiler = false;
    this.getProductData();
  }
}
