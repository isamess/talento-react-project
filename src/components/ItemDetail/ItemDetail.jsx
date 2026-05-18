import {Item} from "../Item/Item.jsx";
import { useCart } from "../../context/CartContext.jsx";
import './ItemDetail.css';



export const ItemDetail = ({item}) => {
    const {addItem} = useCart();
    if (!item) {
        return <p>Cargando producto...</p>;
    }
    return (
        //le pongo una función flecha al onClick para que no se autoinvoque el botón al renderizar el componente
        <Item {...item}>
            
            <button className='boton'
            onClick={()=> addItem(item)}>  
                Agregar al carrito
                </button>
        </Item>
    );
};
