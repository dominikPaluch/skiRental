import { Product } from './Product';

export class Reservation {
    id: number;
    price: number;
    startDate: string;
    endDate: string;
    products: Product[];
};
