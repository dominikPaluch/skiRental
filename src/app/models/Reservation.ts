import { Product } from './Product';

export class Reservation {
    id: number;
    price: number;
    startDate: string;
    endDate: string;
    daysReserved: number;
    daysLeft: number;
    products: Product[];
};
