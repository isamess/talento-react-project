import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { getProductById } from "../../services/productsService";


export const ItemDetailContainer = () => {
    const {id} = useParams();  //id dinámico, cambia según el producto que se seleccione

    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id)
        .then((data) => setItemDetail(data))
        .catch((error) => console.error("Error al cargar el producto:", error))
        .finally(() => setLoading(false));
    },[]);
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