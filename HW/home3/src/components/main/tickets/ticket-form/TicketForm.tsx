import React, { useState } from 'react';
import { Ticket, TicketType } from '../../../interfaces/tickets.dao';
import InputField from '../../../shared-component/InputField';
import Select from 'react-select';
import ActionButton from '../../../shared-component/ActionButton';
import './TicketForm.scss'

interface IProps {
    updateTicketList: (ticket: Ticket) => void;
    handleCloseModal: () => void;
}

const TicketForm = (props: IProps) => {
    
    const {
        updateTicketList,
        handleCloseModal
    } = props;

    const [title, setTitle] = useState <string>('');
    const [date, setDate] = useState(0);
    const [type, setType] = useState ('');
    const [price, setPrice] = useState(0);
    const [sold, setSold] = useState('');


    const handleTitleChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string> } }): void => {
        event.preventDefault();
        setTitle(event.target.value);
    }

    const handleDateChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<number> } }): void => {
        event.preventDefault();
        setDate(event.target.value);
    }

    const TicketTypeArr = [
        { label: 'One way ticket', value: 'One way ticket' },
        { label: 'Two way ticket', value: 'Two way ticket' },
        { label: 'Ticket with transfers', value: 'Ticket with transfers' },
    ];

    // const handleTypeChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }): void => {
    //     event.preventDefault();
    //     setType(event.target.value as TicketType);
    // }

    const handlePriceChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string> } }): void => {
        event.preventDefault();
        const value = event.target.value
        setPrice(value as unknown as number);
    }

    const TicketAvailability = [
        {label: "Sold", value: true},
        {label: "Available", value: false}
    ];

    // const handleSoldChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string> } }): void => {
    //     event.preventDefault();
    //     setSold(event.target.value);
    // }

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

            <h4>Ticket create form</h4>

                <InputField 
                    className='input-field' 
                    onChange={handleTitleChange} 
                    type="text" 
                    placeholder='Title' 
                />

                <InputField 
                    className='input-field' 
                    onChange={handleDateChange} 
                    type="date" 
                    placeholder='Date' 
                />

                <Select options={TicketTypeArr} className='select-field' />

                <InputField 
                    className='input-field' 
                    onChange={handlePriceChange} 
                    type="number" 
                    placeholder='Price' 
                />

                <Select options={TicketAvailability} className='select-field' />

            <footer className='flex'>
                <ActionButton
                    action={createTicket}
                    buttonText='Create'
                    className='btn create-btn'
                />
               
                <ActionButton
                    action={handleCloseModal}
                    buttonText='Cancel'
                    className='btn close-form-btn'
                />
            </footer>
        </form>
    )
}

export default TicketForm;