import { Reservation } from './Reservation';

  export const Reservations: Reservation[] = [
      { id: 1, price: 199.98, startDate: '15-11-2017', endDate: '17-11-2017', daysReserved: 3, daysLeft: 8, products: [
        { id: 1, name: 'Narty', src: '/assets/img/skis/big_a48c82e99ec94d4d967ff56b84e2bb50.jpg', price: 99.99, size: 170,
          info: 'Narty idealne do ...'}
       ]},
      { id: 2, price: 689.94, startDate: '19-12-2017', endDate: '22-12-2017', daysReserved: 4, daysLeft: 6, products: [
        { id: 5, name: 'Narty local hero', src: '/assets/img/skis/narty-local-hero-jr.jpg', price: 109.99, size: 170,
          info: 'Narty idealne do ...'},
        { id: 8, name: 'Narty biegowe rekreacyjne', src: '/assets/img/skis/nartybiegowe_rekreacyjne.jpg', price: 119.99, size: 175,
          info: 'Narty idealne do ...'}
       ]}
  ]
