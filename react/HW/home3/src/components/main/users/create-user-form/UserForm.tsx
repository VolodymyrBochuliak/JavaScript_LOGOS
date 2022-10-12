import React, { useState } from 'react';
import User from '../../../interfaces/user.dao';

interface IProps {
    updateUserList: (user: User) => void;
}

const UserForm = (props: IProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const handleFirstNameChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string> } }): void => {
        event.preventDefault();
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string> } }): void => {
        event.preventDefault();
        setLastName(event.target.value);
    }

    const handleAgeChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }): void => {
        event.preventDefault();
        const value = event.target.value
        setAge(value as unknown as number);
    }

    const handleEmailChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string> } }): void => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const idGeneration = (): string => {
        return firstName + Math.round(Math.random() * 10e10) + lastName;
    }

    const createUser = (event: { preventDefault: () => void; }): void => {
        event.preventDefault();

        props.updateUserList({
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            id: idGeneration()
        })
    }

    return (
        <form onSubmit={createUser}>
            <input onChange={handleFirstNameChange} type="text" placeholder='First Name' />
            <input onChange={handleLastNameChange} type="text" placeholder='Last Name' />
            <input onChange={handleAgeChange} type="number" placeholder='Age' />
            <input onChange={handleEmailChange} type="email" placeholder='Email' />
            <button>Create</button>
        </form>
    )
}

export default UserForm;
