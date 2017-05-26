import {Component, ViewChild, OnInit} from '@angular/core';
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

  constructor(private productService: ProductService, private router: Router, private cartStore: CartStore) {
    this.rowColors = this.rowColors.bind(this);

   // this.carResource.count().then(count => this.carCount = count);
  }

  ngOnInit(): void {
    this.getProductData();
  }

  products: Product[];
  quantity: number;
  // carResource = new DataTableResource(cars);
  cars = [];
  carCount = 0;
  yearLimit = 1999;


  // Dynamic route for detail info when a product is clicked
  clickedProduct(product) {
    const link = ['/detail', product.id];
    this.router.navigate(link);
  }

  // When add to cart button is clicked
  addToCart(product) {
    // this.productService.addToCart(product)
    console.log(this.quantity)
    this.cartStore.addToCart(product, this.quantity || 1);
  }

  getProductData() {
    this.productService.getProducts().then(products => this.products = products);
  }

  // reloadProd(params) {
  //   this.carResource.query(params).then(carsa => this.cars = carsa);
  // }

  carClicked(car) {
    alert(car.model);
  }

  rowColors(car) {
    if (car.year >= this.yearLimit) {
      return 'rgb(255, 255, 197)';
    }
    ;
  }
}
