import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <h1>LOGO</h1>
            <nav>
                <ul className='menu'>
                    <li><a href="#">users</a></li>
                    <li><a href="#">tickets</a></li>
                    <li><a href="#">admin</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;