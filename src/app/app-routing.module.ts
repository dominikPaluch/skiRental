import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import {LoginComponent} from './registration/login/index';
import {RegisterComponent} from './registration/register/index';
import {AppComponent} from './app.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ReservationDetailComponent } from './components/reservation-detail/reservation-detail.component';
import { OrderComponent } from './components/order/order.component';
import {DeliveryComponent} from './components/delivery/delivery.component';
import {SummaryComponent} from './components/summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  }, {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reservations',
    component: ReservationsComponent
  },
  {
    path: 'reservation-detail/:id',
    component: ReservationDetailComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'delivery',
    component: DeliveryComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
