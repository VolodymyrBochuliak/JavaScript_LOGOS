import { useState } from "react";
import User from "../../interfaces/user.dao";
import UserForm from "./create-user-form/UserForm";
import UserList from "./user-list/UserList";


const Users = () => {
    const usersFromStorage: User[] = JSON.parse(localStorage.getItem('users') as string) || [];
    const [users, setUsers] = useState(usersFromStorage);

    const updateUserList = (newUser: User) => {
        setUsers([...users, newUser]);
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
    }

    return (
        <div>
            <UserForm updateUserList={updateUserList}/>
            <UserList users={users} />
        </div>
    )
}

export default Users;