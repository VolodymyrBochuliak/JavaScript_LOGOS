import { Ticket, TicketType} from '../../../../interfaces/tickets.dao'

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

    return (
        <tr>
            <td>{title}</td>
            <td>{date}</td>
            <td>{type}</td>
            <td>{price} $</td>
            <td>{sold}</td>
        </tr>
    )
}

export default TicketListItem;
