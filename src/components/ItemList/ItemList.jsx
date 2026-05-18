import React from 'react';
import { Link } from 'react-router-dom';
import {Item} from '../Item/Item';
import "./ItemList.css";

export const ItemList = ({products}) => {
    if (!products.length) {
        return <p>Cargando productos...</p>;
    }
    return (
        <div className= "products-container">
            {products.map((product) => (
                //pongo el link acá para que cada producto sea un link a su detalle
                <Link  to={`/product/${product.id}`} key={product.id} className="link">

                    <Item { ...product }/>
                </Link>
            ))}          
        </div>


    );
};
