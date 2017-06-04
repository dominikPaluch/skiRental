import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {Router} from '@angular/router';
import {Product} from '../../models/Product';
import { Reservation } from '../../models/Reservation';
import { ReservationService } from '../../services/reservation.service';

@Component({
    selector: 'order',
    templateUrl: 'order.component.html',
    styleUrls: ['order.component.scss']
})

export class OrderComponent {
  reservation: Reservation;

    constructor(
        private reservationService:ReservationService,
        private route:ActivatedRoute,
        private location:Location,
        private router:Router
    ) { this.getReservation(); }

    // When initialized, fetch for the reservation info based on the reservation id and set it as selectedReservation
    ngOnInit() {
    }

    goBack() {
        this.location.back();
    }

    getReservation() {
      this.reservationService.getReservations().then(reservations => this.reservation = reservations[0]);
    }
}
