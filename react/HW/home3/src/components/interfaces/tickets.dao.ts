
interface Ticket {
    title: string;
    date: Date;
    type: Type;
    price: number;
    sold: boolean;
}

enum Type {
    oneWay = 'One way ticket',
    twoWays = 'Two way ticket',
    withTransfers = 'Ticket with transfers',
}

export default Ticket;

