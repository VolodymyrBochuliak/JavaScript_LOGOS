import { useState } from "react";
import User from "../../interfaces/user.dao";
import ActionButton from "../../shared-component/ActionButton";
import UserForm from "./create-user-form/UserForm";
import UserList from "./user-list/UserList";


const Users = () => {
    const usersFromStorage: User[] = JSON.parse(localStorage.getItem('users') as string) || [];
    const [users, setUsers] = useState(usersFromStorage);
    const [isModalOpened, setModalOpened] = useState<boolean>(false);

    const updateUserList = (newUser: User) => {
        setUsers([...users, newUser]);
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
    }

    const handleClearList = () => {
        localStorage.removeItem('users');
        setUsers([]);
    }
  
    const handleOpenModal = () => {
        setModalOpened(true);
    }

    const closeModal = () => setModalOpened(false);

    return (
        <div>
            <UserList users={users} />
            
            <div className="buttons-container">
                <ActionButton
                    action={handleOpenModal}
                    buttonText='Create new User'
                    className='btn open-form-btn'
                />
                <ActionButton
                    action={handleClearList}
                    buttonText='Clear Users list'
                    className='btn clear-list-btn'
                />
            </div>
            
            {isModalOpened &&
                <UserForm 
                updateUserList={updateUserList}
                handleCloseModal={closeModal}
                />
            }
        </div>
    )
}

export default Users;