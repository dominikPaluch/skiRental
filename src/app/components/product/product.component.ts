import {Component, ViewChild, OnInit, Input} from '@angular/core';
import {DataTable, DataTableResource} from 'angular-2-data-table';

import {Router} from '@angular/router';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';
import {CartStore} from '../../store/cart.store';
import {User} from '../../registration/_models/index';
import {UserService} from '../../registration/_services/index';

declare var $: any;

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  products: Product[];
  quantity: number[] = [];
  priceLimit = 100;
  chosenTypes: string[] = [];
  chosenSizes: string[] = [];
  mouseOver: number = 0;
  datesChosen: boolean;

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

  checkDates() {
    var startDateChosen = (document.querySelector("#startDP").querySelectorAll("input")[0].value !== '');
    var endDateChosen = (document.querySelector("#endDP").querySelectorAll("input")[0].value !== '');
    console.log("start: " + startDateChosen + ", end: "+ endDateChosen);
    this.datesChosen = startDateChosen && endDateChosen;
  }

  ngOnInit(): void {
    this.getProductData();

    for(var i=0; i<this.quantity.length; i++){
      this.quantity[i] = 1;
    }
  }

  clickedProduct(product) {
    const link = ['/detail', product.id];
    this.router.navigate(link);
  }

  addToCart(product) {
    this.checkDates();
    if(this.datesChosen) {
      this.cartStore.addToCart(product, this.quantity[product.id] || 1);
      console.log("addToCart() invoked, quantity: "+this.quantity[product.id]);
    } else {
      $('#chooseDateModal').modal();
    }
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
    this.chosenTypes = [];
    this.chosenSizes = [];
    this.uncheckAll();
  }

  uncheckAll() {
      var w = document.getElementsByTagName('input');
      for(var i = 0; i < w.length; i++){
        if(w[i].type=='checkbox'){
          w[i].checked = false;
          };
      };
  }

  chooseType(type) {
      var i;
      for(i=0; i<this.chosenTypes.length; i++){
        if(this.chosenTypes[i] == type){
          this.chosenTypes.splice(i, 1);
          return;
        }
      }
      this.chosenTypes[i] = type;
  }

  displayChosenTypes() {
      var str = '';
      for(var i=0; i<this.chosenTypes.length; i++){
        str += this.chosenTypes[i] + ', ';
      }
      return str;
  }

  chooseSize(size) {
      var i;
      for(i=0; i<this.chosenSizes.length; i++){
        if(this.chosenSizes[i] == size){
          this.chosenSizes.splice(i, 1);
          return;
        }
      }
      this.chosenSizes[i] = size;
  }

  displayChosenSizes() {
      var str = '';
      for(var i=0; i<this.chosenSizes.length; i++){
        str += this.chosenSizes[i] + ', ';
      }
      return str;
  }

  setMouseOver(b){
    this.mouseOver = b;
  }
}
