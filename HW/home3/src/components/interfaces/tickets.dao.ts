

export interface Ticket {
    title: string;
    date: number;
    type: string;
    // type: TicketType;
    price: number;
    sold: string;
}

export enum TicketType {
    oneWay = 'One way ticket',
    twoWays = 'Two way ticket',
    withTransfers = 'Ticket with transfers',
}

 

