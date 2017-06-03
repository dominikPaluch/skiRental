import { Injectable } from '@angular/core';
import { Reservations } from '../models/reservation-data';
import { ReservationsRemoved1 } from '../models/reservation-removed-data';
import { ReservationsRemoved2 } from '../models/reservation-removed-data';
import { Reservation } from '../models/Reservation';
import { Observable, Subject } from 'rxjs';

// The consumer of angular services doesn't know how the service gets the data.
// This ProductService could get the data from anywhere.
// It could get the data from a web service or local storage or from a mock data source.
// That's the beauty of removing data access from the component.
// We can change our minds about the implementation as often as we like, for whatever reason,
// without touching any of the components that need the data.
@Injectable()
export class ReservationService {

    constructor() {
    }

    getReservations() {
        return Promise.resolve(Reservations);
    }

    getReservationsRemoved(id) {
      if(id===1)
        return Promise.resolve(ReservationsRemoved1);
      else
        return Promise.resolve(ReservationsRemoved2);
    }

    getReservation(id) {
        return this.getReservations()
                    .then(reservations => reservations.find(reservation => reservation.id === id));
    }
}
