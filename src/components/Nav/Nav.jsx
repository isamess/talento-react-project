import {Link} from 'react-router-dom';
import './Nav.css';
import { FaShoppingCart, FaChevronDown } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';






export const Nav = () => {

    const {getTotalItems} = useCart();
    const totalItems = getTotalItems();
    const [showCategories, setShowCategories] = useState(false);

    return (
        <nav className="menu">
            <ul>
    <li>
        <Link to="/">Home</Link>
    </li>

    <li className="dropdown">
    <button
    className="dropdown-btn"
    onClick={() => {
        console.log("click");
        setShowCategories(prev => !prev);
    }}
>
    Productos
    <FaChevronDown />
</button>

    {showCategories && (
        <ul className="submenu">
            <li>
                <Link
                    to="/products/category/luminarias"
                    onClick={() => setShowCategories(false)}
                >
                    Luminarias
                </Link>
            </li>

            <li>
                <Link
                    to="/products/category/vitrales"
                    onClick={() => setShowCategories(false)}
                >
                    Vitrales
                </Link>
            </li>

            <li>
                <Link
                    to="/products/category/muebles"
                    onClick={() => setShowCategories(false)}
                >
                    Muebles
                </Link>
            </li>

            <li>
                <Link
                    to="/products/category/espejos"
                    onClick={() => setShowCategories(false)}
                >
                    Espejos Artesanales
                </Link>
            </li>
        </ul>
    )}
</li>

    <li>
        <Link to="/about">Acerca de</Link>
    </li>

    <li>
        <Link to="/contact">Contacto</Link>
    </li>

    <li>
        <Link to="/carrito">
            <FaShoppingCart />
            {totalItems > 0 && <span>{totalItems}</span>}
        </Link>
    </li>
</ul>
        </nav>
    )
};
