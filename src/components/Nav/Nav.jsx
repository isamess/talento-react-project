import {Link} from 'react-router-dom';
import './Nav.css';
import { FaShoppingCart } from 'react-icons/fa';



export const Nav = () => {
    return (
        <nav className="menu">
            <ul >
                <li ><Link to={"/"}>Home</Link></li>
                <li ><Link to={"/products"}>Productos</Link></li> 
                <li ><Link to={"/about"}>About</Link></li>
                <li ><Link to={"/contact"}>Contact</Link></li>
                <li ><Link to={"/carrito"}> <FaShoppingCart/></Link></li>
            </ul>
        </nav>
    )
};
