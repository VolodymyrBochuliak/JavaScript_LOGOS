import Users from "./users/Users";
import Tickets from "./tickets/tickets";
import '../main/main.scss'

const Main = () => {
    return (
        <div className="main-container">
            <Users />
            <Tickets />
        </div>
    )
}

export default Main;