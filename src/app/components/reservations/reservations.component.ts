import {Component, ViewChild, OnInit, Input} from '@angular/core';
import {DataTable, DataTableResource} from 'angular-2-data-table';

import {Router} from '@angular/router';
import {Reservation} from '../../models/Reservation';
import {ReservationService} from '../../services/reservation.service';

@Component({
  selector: 'reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})

export class ReservationsComponent implements OnInit {
  reservations: Reservation[];

  constructor(private reservationService: ReservationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getReservationData();
  }

  getReservationData() {
    this.reservationService.getReservations().then(reservations => this.reservations = reservations);
  }

  clickedReservation(reservation) {
    const link = ['/reservation-detail', reservation.id];
    this.router.navigate(link);
  }

  remove(id) {
    this.reservationService.getReservationsRemoved(id).then(reservations => this.reservations = reservations);
  }
}
