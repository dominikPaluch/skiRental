import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { CartStore } from '../../store/cart.store';
import {User} from '../../registration/_models/index';
import {Router} from '@angular/router';

@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.scss']
})

export class ProductDetailComponent {
    currentUser: User;
    selectedProduct:Product;
    quantity: number;
    constructor(
        private productService:ProductService,
        private route:ActivatedRoute,
        private router: Router,
        private location:Location,
        private cartStore: CartStore
    ) {
          router.events.subscribe(() => {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          });
    }

    addToCart(product) {
        this.cartStore.addToCart(product, this.quantity || 1)
    }

    // When initialized, fetch for the product info based on the product id and set it as selectedProduct
    ngOnInit() {
        this.route.params.forEach(param => {
            let id = parseInt(param['id'])
            this.productService.getProduct(id)
                .then(product => this.selectedProduct = product)
        })
    }

    goBack() {
        this.location.back()
    }
}
