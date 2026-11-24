import { NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/meals'>Meals</NavLink>
            </nav>
        </div>
    );
};

export default Header;