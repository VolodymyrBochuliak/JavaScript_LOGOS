
import Users from "./users/Users";
import { NotFoundPage } from "./no-found-page/NotFoundPage"; 
import { Routes, Route } from 'react-router-dom';
import Tickets from "./tickets/Tickets";
import '../main/main.scss'


const Main = () => {
    return (
        <div className="main-container">
            <Routes>
                <Route path="/"></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/tickets" element={<Tickets />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
        </div>
    )
}

export default Main;