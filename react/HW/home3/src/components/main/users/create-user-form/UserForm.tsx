import React, { useState } from 'react';
import User from '../../../interfaces/user.dao';
import ActionButton from '../../../shared-component/ActionButton';
import InputField from '../../../shared-component/InputField';

interface IProps {
    updateUserList: (user: User) => void;
    handleCloseModal: () => void;
}

const UserForm = (props: IProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const {
        updateUserList,
        handleCloseModal
    } = props;

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

        <h4>User create form</h4>

            <InputField 
                className='input-field' 
                onChange={handleFirstNameChange} 
                type="text" 
                placeholder='First Name' 
            />
            <InputField 
                className='input-field' 
                onChange={handleLastNameChange} 
                type="text" 
                placeholder='Last Name' 
            />
            <InputField 
                className='input-field' 
                onChange={handleAgeChange} 
                type="number" 
                placeholder='Age' 
            />
            <InputField 
                className='input-field' 
                onChange={handleEmailChange} 
                type="email" 
                placeholder='Email' 
            />
           
            <footer className='flex'>
                <ActionButton
                    action={createUser}
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

export default UserForm;
