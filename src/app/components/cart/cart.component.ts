import {Component, OnDestroy, OnInit} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartStore } from '../../store/cart.store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.cartSubscription = this.cartStore.getState().subscribe(res => {
      this.cart = res.products;
      this.getTotalPrice();
    });
  }


  public cart = [];
  public totalPrice: number;
  public totalQuantity: number;
  public cartSubscription: Subscription;

  constructor(private productService: ProductService, private cartStore: CartStore)  {}

  removeProduct(product) {
    this.cartStore.removeFromCart(product);
  }

  checkout() {
    alert('Sorry! Checkout will be coming soon!');
  }

  getTotalPrice() {
    const totalCost: Array<number> = [];
    const quantity: Array<number> = [];
    let intPrice: number;
    let intQuantity: number;
    this.cart.forEach((item, i) => {
      intPrice = parseInt(item.price);
      intQuantity = parseInt(item.quantity);
      totalCost.push(intPrice)
      quantity.push(intQuantity);
    });

    this.totalPrice = totalCost.reduce((acc, item) => {
      return acc += item;
    }, 0);
    this.totalQuantity = quantity.reduce((acc, item) => {
      return acc += item;
    }, 0);
  }
}
