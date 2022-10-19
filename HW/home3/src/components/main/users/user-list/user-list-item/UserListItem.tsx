import User from "../../../../interfaces/user.dao";

interface IProps {
    user: User
}

const UserListItem = (props: IProps) => {
    const {
        firstName,
        lastName,
        age,
        email,
        id
    } = props.user;

    // const firstName = props.user.firstName;
    // const lastName = props.user.lastName;
    // const age = props.user.age;
    // const email = props.user.email;

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{email ? email : 'No E-Mail'}</td>
            <td>{id}</td>
        </tr>
    )
}

export default UserListItem;
