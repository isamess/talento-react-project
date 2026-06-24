import React from 'react'
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import "./ItemListContainer.css";
import { useParams } from 'react-router-dom';
import { getByCategory } from '../../services/productsService';


export const ItemListContainer = () => {
    const {category} = useParams();
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

        useEffect(() => { 
            setLoading(true);

            getByCategory(category)
                .then((data) => setProducts(data))
                .catch((error) => console.error("Error al cargar los productos:", error))
                .finally(() => setLoading(false));
        }, [category]);  //agrego category como dependencia para que se ejecute cada vez que cambie la categoría
           
    return (
       <section>
            {loading ? (<p>Cargando productos...</p>
            ) : (
                <ItemList products={products} />
            )}
        </section>
    );
};

