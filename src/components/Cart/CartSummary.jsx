import { useCart } from "../../context/CartContext";


export const CartSummary = () => {
    const {getCartTotal, checkout} = useCart();

    const total = getCartTotal();
    return(
        <>
        <p>Total: ${total}</p>
        <button className="btn bg-primary" onClick={checkout}>Finalizar Compra

        </button>

        </>
    );
};