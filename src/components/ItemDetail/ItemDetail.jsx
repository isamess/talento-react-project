import {Item} from "../Item/Item.jsx";



export const ItemDetail = ({item}) => {
    return (
        <Item {...item}>
            <button className='tarjeta__boton'>Agregar al carrito</button>

        </Item>
    );
};
