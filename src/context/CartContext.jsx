import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';



//creación de contexto para el carrito de compras
const CartContext = createContext();

//Custom hook para usar el contexto del carrito de compras
export const useCart = ()=>{
    const context= useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
};

//Componente proveedor del contexto del carrito de compras
export const CartProvider = ({children})=>{
    const navigate = useNavigate();            //hook para realizar una navegación programática al home después de finalizar la compra
    const [cart, setCart] = useState([]);

    //some evaluará si al menos un elemento del array cumple con la condición dada, en este caso, si el id del elemento es igual al id del item que se está buscando y devuelve True o False
    const IsInCart=(item)=>{
        const inCart = cart.some((element) => element.id === item.id);
        return inCart;
    };

    //agregar item al carrito
    const addItem=(item)=>{
        if (IsInCart(item)) {
            alert('El producto ya está en el carrito');
            return;
        }
        setCart([...cart, item]);
        alert('Producto agregado al carrito!');
    };

    //Eliminar del carrito
    const removeItem=(id)=>{
        const updatedCart = cart.filter((element) => element.id !== id);
        setCart(updatedCart);
        alert('Producto eliminado del carrito!');
    };

    //vaciar carrito
    const clearCart=()=>{
        setCart([]);
        alert('Carrito vacío!');
    };

    //calcular total de items del carrito sin quantity
   const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
};

    //Total a pagar
    const getCartTotal=()=>{
        return cart.reduce((total, item) => total + item.price, 0);
    };

    //Checkout
    const checkout=()=>{
        // Lógica de finalización de compra
        alert('Compra realizada con éxito!');
        clearCart();
        navigate('/');

    }

    const values = {
        addItem,
        removeItem,
        getTotalItems,
        getCartTotal,
        clearCart,
        checkout,
    };
    return (
        <CartContext.Provider value={{ cart, ...values }}>
            {children}
        </CartContext.Provider>
    );
}





