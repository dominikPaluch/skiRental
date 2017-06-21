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
  daysReserved: number = 0;
  daysReservedInfo: string = '';

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
    this.checkDates();
    if(this.datesChosen) {
      var startDateStr = document.querySelector("#startDP").querySelectorAll("input")[0].value;
      var endDateStr = document.querySelector("#endDP").querySelectorAll("input")[0].value;
      var start = startDateStr.split(" ");
      var end = endDateStr.split(" ");
      var startMc = '';
      var endMc = '';
      switch(start[1]){
        case 'Styczeń': { startMc = '01'; break; }
        case 'Luty': { startMc = '02'; break; }
        case 'Marzec': { startMc = '03'; break; }
        case 'Kwiecień': { startMc = '04'; break; }
        case 'Maj': { startMc = '05'; break; }
        case 'Czerwiec': { startMc = '06'; break; }
        case 'Lipiec': { startMc = '07'; break; }
        case 'Sierpień': { startMc = '08'; break; }
        case 'Wrzesień': { startMc = '09'; break; }
        case 'Październik': { startMc = '10'; break; }
        case 'Listopad': { startMc = '11'; break; }
        case 'Grudzień': { startMc = '12'; break; }
      }
      switch(end[1]){
        case 'Styczeń': { endMc = '01'; break; }
        case 'Luty': { endMc = '02'; break; }
        case 'Marzec': { endMc = '03'; break; }
        case 'Kwiecień': { endMc = '04'; break; }
        case 'Maj': { endMc = '05'; break; }
        case 'Czerwiec': { endMc = '06'; break; }
        case 'Lipiec': { endMc = '07'; break; }
        case 'Sierpień': { endMc = '08'; break; }
        case 'Wrzesień': { endMc = '09'; break; }
        case 'Październik': { endMc = '10'; break; }
        case 'Listopad': { endMc = '11'; break; }
        case 'Grudzień': { endMc = '12'; break; }
      }
      var startDate = new Date(start[2] + "-" + startMc + "-" + start[0]);
      var endDate = new Date(end[2] + "-" + endMc + "-" + end[0]);
      var msInDay = 1000 * 3600 * 24;
      this.daysReserved = (endDate.getTime() / msInDay) - (startDate.getTime() / msInDay) + 1;
      if(this.daysReserved == 1) {
        this.daysReservedInfo = "Rezerwujesz sprzęt na " + this.daysReserved + " dzień";
      } else {
        this.daysReservedInfo = "Rezerwujesz sprzęt na " + this.daysReserved + " dni";
      }
    }
  }

  showAll() {
    this.isFiler = false;
    this.getProductData();
    this.chosenTypes = [];
    this.chosenSizes = [];
    this.uncheckAll();
    this.daysReservedInfo = '';
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
