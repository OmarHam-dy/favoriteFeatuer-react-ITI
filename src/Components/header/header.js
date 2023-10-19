import { Link } from 'react-router-dom';
import './header.css'


function Header() {
    return (
        <div className="header">
            <Link to={'/'} className="btn">Home</Link>
            <Link to={'/favorites'} className="btn">Favorite List</Link>
        </div>
    );
}

export default Header;