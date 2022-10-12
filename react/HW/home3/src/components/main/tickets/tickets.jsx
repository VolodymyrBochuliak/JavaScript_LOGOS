import { useState } from "react";
import Ticket from "../../interfaces/tickets.dao";
import TicketsList from "./tickets-list/TicketsList";


const Tickets = () => {
    const ticketsFromStorage: Ticket[] = JSON.parse(localStorage.getItem('tickets') as string) || [];
    const [tickets, setTickets] = useState(ticketsFromStorage);

    const updateTicketList = (newTicket: Ticket) => {
        setTickets([...tickets, newTicket]);
        localStorage.setItem('tickets', JSON.stringify([...tickets, newTicket]));
    }

    return (
        <div>
            <TicketForm updateTicketList={updateTicketList}/>
            <TicketsList tickets={tickets} />
        </div>
    )
}

export default Tickets;