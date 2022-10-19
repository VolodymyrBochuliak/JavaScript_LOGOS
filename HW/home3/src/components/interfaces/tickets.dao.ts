

export interface Ticket {
    title: string;
    date: number;
    type: TicketType;
    price: number;
    sold: boolean;
}

export enum TicketType {
    oneWay = 'One way ticket',
    twoWays = 'Two way ticket',
    withTransfers = 'Ticket with transfers',
}

 

