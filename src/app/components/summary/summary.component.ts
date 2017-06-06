import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {Router} from '@angular/router';
import {Product} from '../../models/Product';
import { Reservation } from '../../models/Reservation';
import { ReservationService } from '../../services/reservation.service';

@Component({
    selector: 'summary',
    templateUrl: 'summary.component.html',
    styleUrls: ['summary.component.scss']
})

export class SummaryComponent {
reservation: Reservation;

    constructor(
        private reservationService:ReservationService,
        private route:ActivatedRoute,
        private location:Location,
        private router:Router
    ) { this.reservationService.getReservation(1)
          .then(reservation => this.reservation = reservation); }

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
