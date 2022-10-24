import React, { useState } from 'react';
import { Ticket } from '../../../interfaces/tickets.dao';
import InputField from '../../../shared-component/InputField';
import ActionButton from '../../../shared-component/ActionButton';
import './TicketForm.scss'
import CustomSelect, { Option } from '../../../shared-component/SelectFild';

interface IProps {
    updateTicketList: (ticket: Ticket) => void;
    handleCloseModal: () => void;
}

const TicketForm = (props: IProps) => {
    
    const {
        updateTicketList,
        handleCloseModal
    } = props;

    const [title, setTitle] = useState('');
    const [date, setDate] = useState <number>(0);
    const [type, setType] = useState ('');
    const [price, setPrice] = useState(0);
    const [sold, setSold] = useState('');


    const handleTitleChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string> } }): void => {
        event.preventDefault();
        setTitle(event.target.value);
    }

    const handleDateChange = (event: { preventDefault: () => void; target: {  value: React.SetStateAction<string> }; }): void => {
        event.preventDefault();
       
        setDate(event.target.value as any);

        // const value = +event.target.value;
        // if (!isNaN(value)) {
        //     setDate(value);
        // }
    }

    const TicketTypes: Option[] = [
        { label: 'One way ticket', value: 'One way ticket' },
        { label: 'Two way ticket', value: 'Two way ticket' },
        { label: 'Ticket with transfers', value: 'Ticket with transfers' },
    ];
    
    const handleTypeChange = (option: Option): void => {
        setType(option.value);
    }

    const handlePriceChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string> } }): void => {
        event.preventDefault();
        const value = event.target.value
        setPrice(value as unknown as number);
    }

    const TicketAvailability = [
        {label: "Sold", value: "Sold"},
        {label: "Available", value: "Available"}
    ];

    const handleSoldChange = (option: Option): void => {
        setSold(option.value);
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

                <CustomSelect 
                    className='select-field' 
                    options={TicketTypes}
                    selectedOption={type}
                    setSelectedOption={handleTypeChange} 
                    placeholder='Ticket type'             
                />
                
                <InputField 
                    className='input-field' 
                    onChange={handlePriceChange} 
                    type="number" 
                    placeholder='Price' 
                />

                <CustomSelect 
                    className='select-field' 
                    options={TicketAvailability}
                    selectedOption={sold}
                    setSelectedOption={handleSoldChange}  
                    placeholder='Availability'
               />

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