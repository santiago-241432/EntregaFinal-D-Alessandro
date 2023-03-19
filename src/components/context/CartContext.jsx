import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.index)){
            let pos = cart.findIndex(x => x.index === item.index);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        }else{
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }
    
    const removeItem = (itemId) => {
        const items = cart.filter(item => item.index !== itemId);
        setCart([...items]);
    }
    const clear = () => {
        setCart([]);

    }

    const isInCart = (itemId) => {
        return cart.some(item => item.index === itemId);
    }

    const cartTotal = () =>{
        return cart.reduce((accum, item) => accum += item.quantity,0);
    }

    const cartSuma = () =>{
        return cart.reduce ((accum, item) => accum += item.quantity * item.precio , 0);
    }




    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, cartSuma}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider;
