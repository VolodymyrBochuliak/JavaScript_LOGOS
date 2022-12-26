import React from 'react';
import { Ticket } from '../../../interfaces/tickets.dao';
import TicketListItem from './tickets-list-item/TicketListItem';

interface IProps {
    tickets: Ticket[]
}

const TicketsList = (props: IProps) => {
    const tickets = props.tickets;

    if (tickets.length) {
        return (
            <table>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Data</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket, index) => {
                        return <TicketListItem key={index} ticket={ticket} />
                    })}
                </tbody>
            </table>
        )
    } else {
        return <div>Tickets List is Empty</div>
    }
}

export default TicketsList;
