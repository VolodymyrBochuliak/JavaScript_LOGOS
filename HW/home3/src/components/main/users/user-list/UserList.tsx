import React from 'react';
import User from '../../../interfaces/user.dao';
import UserListItem from './user-list-item/UserListItem';

interface IProps {
    users: User[]
}

const UserList = (props: IProps) => {
    const users = props.users;

    if (users.length) {
        return (
            <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>E-Mail</th>
                    <th>ID</th>
                </thead>
                <tbody>
                    {users.map(user => {
                        return <UserListItem user={user} key={user.id} />
                    })}
                </tbody>
            </table>
        )
    } else {
        return <div>Users List is Empty</div>
    }
}

export default UserList;
