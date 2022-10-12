import React, { useState } from 'react';
import Ticket from '../../../interfaces/tickets.dao';

interface IProps {
    updateTicketList: (ticket: Ticket) => void;
}

const UserForm = (props: IProps) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState(0);
    const [sold, setSold] = useState('');

    const handleTitleChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string> } }): void => {
        event.preventDefault();
        setTitle(event.target.value);
    }

    const handleDateChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string> } }): void => {
        event.preventDefault();
        setDate(event.target.value);
    }

    const handleTypeChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }): void => {
        event.preventDefault();
        setType(event.target.value);
    }

    const handlePriceChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string> } }): void => {
        event.preventDefault();
        const value = event.target.value
        setPrice(value as unknown as number);
    }

    const handleSoldChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string> } }): void => {
        event.preventDefault();
        setSold(event.target.value);
    }

    const createTicket = (event: { preventDefault: () => void; }): void => {
        event.preventDefault();

        props.updateTicketList({
            title: title,
            date: date,
            type: type,
            price: price,
            sold: sold,
       })
    }

    return (
        <form onSubmit={createTicket}>
            <input onChange={handleTitleChange} type="text" placeholder='First Name' />
            <input onChange={handleDateChange} type="date" placeholder='Last Name' />
            <input onChange={handleTypeChange} type="text" placeholder='Age' />
            <input onChange={handlePriceChange} type="number" placeholder='Price' />
            <input onChange={handleSoldChange} type="select" />
            <button>Create</button>
        </form>
    )
}

export default UserForm;
