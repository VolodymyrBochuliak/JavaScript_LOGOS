import Ticket from './components/interfaces/tickets.dao.ts';

interface IProps {
    ticket: Ticket
}

const TicketListItem = (props: IProps) => {
    const {
        title,
        date,
        type,
        price,
        sold,
    } = props.ticket;

    // const firstName = props.user.firstName;
    // const lastName = props.user.lastName;
    // const age = props.user.age;
    // const email = props.user.email;

    return (
        <tr>
            <td>{title}</td>
            <td>{date}</td>
            <td>{type}</td>
            <td>{price}</td>
            <td>{sold}</td>
        </tr>
    )
}

export default TicketListItem;
