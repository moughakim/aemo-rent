// model for wedding products reservation
export interface Reservation {
    id: number;
    name: string;
    email: string;
    phone: string;
    productList: Product[];
    date: Date;
    price: number;
    status: string;
    deposit: number;
    balance: number;
    depositDate: Date;
    balanceDate: Date;
    balanceStatus: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    type: string;
    description: string;
    image: string;
    deposit: number;
}



