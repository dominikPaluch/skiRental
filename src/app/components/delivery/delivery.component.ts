import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {Router} from '@angular/router';
import {Product} from '../../models/Product';
import { Reservation } from '../../models/Reservation';
import { ReservationService } from '../../services/reservation.service';

@Component({
    selector: 'delivery',
    templateUrl: 'delivery.component.html',
    styleUrls: ['delivery.component.scss']
})

export class DeliveryComponent {

    constructor(
        private reservationService:ReservationService,
        private route:ActivatedRoute,
        private location:Location,
        private router:Router
    ) { }

    // When initialized, fetch for the reservation info based on the reservation id and set it as selectedReservation
    ngOnInit() {
    }

    goBack() {
        this.location.back()
    }

    confirm() {
      console.log('order confirmed');
    }
}
