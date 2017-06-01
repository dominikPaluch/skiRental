import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {CartStore} from '../../store/cart.store';
import {User} from '../../registration/_models/index';
import {UserService} from '../../registration/_services/index';
import {AlertService, AuthenticationService} from '../../registration/_services/index';
import {LoginComponent} from '../../registration/login/login.component';
import {ProductComponent} from "../product/product.component";
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: []
})
export class NavBarComponent implements OnInit {

  public cart: any = [];

  public totalPrice: number;
  public totalQuantity: any;

  currentUser: User;
  users: User[] = [];

  constructor(private productService: ProductService,
              private cartStore: CartStore,
              private userService: UserService,
              private router: Router) {


    router.events.subscribe(() => {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log('user:' + this.currentUser);
    });
  }

  getTotalPrice() {
    const totalCost: Array<number> = [];
    const quantity: Array<number> = [];
    let intPrice: number;
    let intQuantity: number;

    this.cart.products.forEach((item) => {
      intPrice = parseInt(item.price);
      intQuantity = parseInt(item.quantity);
      totalCost.push(intPrice);
      quantity.push(intQuantity);
    });

    this.totalPrice = totalCost.reduce((acc, item) => {
      return acc += item;
    }, 0);
    this.totalQuantity = quantity.reduce((acc, item) => {
      return acc += item;
    }, 0);

  }

  ngOnInit() {
    this.initCart();
    console.log('user: ' + JSON.parse(localStorage.getItem('currentUser')).username);
    // console.log('user product: ' +  this.product.currentUser.username);
  }

  private initCart() {
    this.cartStore.getState().subscribe(res => {
      this.cart = res;
      this.getTotalPrice();
    });
  }

  logout() {
    this.currentUser = null;
  }

  login() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(' po zalogowaniu : ' + this.currentUser.username);
  }

}
