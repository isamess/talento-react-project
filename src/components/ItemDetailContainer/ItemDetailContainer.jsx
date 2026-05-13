import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
    const {id} = useParams();  //id dinámico, cambia según el producto que se seleccione

    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/products.json")
        .then((response) => response.json())
        .then((data) => {
            const item = data.find((element) => String(element.id) ===id);  //busco el producto que coincida con el id del URL y lo convierto a string para comparar con el id del URL que también es string
            if (item) {
            setItemDetail(item);
           return  //si el producto existe, lo seteo en el estado y termino la función. No olvidar el return para que no siga ejecutando el código y tire error de producto no encontrado
        }
        throw new Error("Producto no encontrado");

    })
    .catch((error) => console.error("Error al cargar el producto:", error))
    .finally(() => setLoading(false));
    },[id]);
    if (loading) return <p>Cargando...</p>;
  if (!itemDetail) return <p>Producto no encontrado</p>;

    return (
       <section>
        <h1>Detalle del Producto</h1>
        <div className="item-detail-container">
            <ItemDetail item={itemDetail} />
        </div>  
       </section>
    );
};