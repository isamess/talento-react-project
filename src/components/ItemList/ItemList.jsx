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
                <Link to={`/product/${product.id}`} key={product.id}>

                    <Item { ...product }/>
                </Link>
            ))}          
        </div>


  //        <div>
  //   <h1>TEST</h1>
  //   {products.map((p, i) => (
  //     <p key={i}>{JSON.stringify(p)}</p>
  //   ))}
  // </div>

    );
};
