import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../header/header.scss";

const Header = () => {
    
    const useExactMatch = (path: string = ''): boolean =>{
        const location = useLocation();
        return path === location.pathname;
    }

    return (
        <header className="header">
            <h1>makeLIST</h1>
            <nav>
                <ul className='menu'>
                    <li><Link className={useExactMatch('/') ? 'active' : ''} to={'/'}>Home</Link></li>
                    <li><Link className={useExactMatch('/users') ? 'active' : ''} to={'/users'}>Users</Link></li>
                    <li><Link className={useExactMatch('/tickets') ? 'active' : ''} to={'/tickets'}>Tickets</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;