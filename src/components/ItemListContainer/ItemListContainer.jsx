import React from 'react'
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

        useEffect(() => { 
            setLoading(true);
            fetch("/data/products.json")
            .then((response) => response.json())  //se convierte a JS
            
            .then((data) => setProducts(data)
            )          
            .catch((error) => console.error("Error al cargar los productos:", error))
            .finally(() => setLoading(false));   
            },[]);
            console.log("Productos en ItemList", products);

            if (loading) return <p>Cargando productos...</p>;
            
            

            return (
                <section>
                    <ItemList products={products} />

                </section>
            )
    // return (
    //    <section>
    //         {loading ? (<p>Cargando productos...</p>
    //         ) : (
    //             <ItemList products={products} />
    //         )}
    //     </section>
    // );
};
