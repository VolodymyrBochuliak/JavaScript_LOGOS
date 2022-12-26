import { useState } from "react";
import { Ticket } from "../../interfaces/tickets.dao";
import TicketsList from "./tickets-list/TicketsList";
import TicketForm from "./ticket-form/TicketForm";
import ActionButton from "../../shared-component/ActionButton";


const Tickets = () => {
    const ticketsFromStorage: Ticket [] = JSON.parse(localStorage.getItem('tickets') as string ) || [];
   
    const [tickets, setTickets] = useState(ticketsFromStorage);
    const [isModalOpened, setModalOpened] = useState<boolean>(false);

    const updateTicketList = (newTicket: Ticket) => {
        setTickets([...tickets, newTicket]);
        localStorage.setItem('tickets', JSON.stringify([...tickets, newTicket]));
    }

    const handleOpenModal = () => {
        setModalOpened(true);
    }

    const handleClearList = () => {
        localStorage.removeItem('tickets');
        setTickets([]);
    }

    const closeModal = () => setModalOpened(false);

    return (
        <div>
            <TicketsList 
                tickets={tickets} 
            />
            <div className="buttons-container">
                <ActionButton
                    action={handleOpenModal}
                    buttonText='Create new Ticket'
                    className='btn open-form-btn'
                />

                <ActionButton
                    action={handleClearList}
                    buttonText='Clear tickets list'
                    className='btn clear-list-btn'
                />
            </div>
            
            {isModalOpened &&
                <TicketForm 
                    updateTicketList={updateTicketList}  
                    handleCloseModal={closeModal}
                />
            }
        </div>
    )
}

export default Tickets;