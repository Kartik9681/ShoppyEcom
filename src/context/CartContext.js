import { createContext, useReducer, useEffect } from "react";
import { useContext } from "react";
import reducer from '../reducer/CartReducer'


const CartContext = createContext();

const getMyCart = () => {
    let localCart = localStorage.getItem("myCart");
    if(localCart === []) return [];
    else return JSON.parse(localCart);
}
const initialState = {
    cart: getMyCart(),
    total_item: "",
    total_amount: "",
    shipping: 50000,
}
export const CartContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer, initialState);

    const addToCart = (id,color, amount, product ) =>{
        dispatch({type: "ADD_TO_CART", payload: {id,color, amount, product}})
    }

    const removeItem = (id) => {
        dispatch({type: "DELETE_ONE", payload: id})
    }

    useEffect(() => {
        localStorage.setItem("myCart", JSON.stringify(state.cart));
    }, [state.cart])
    return (
        <CartContext.Provider value = {{...state, addToCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () =>{
    return useContext(CartContext);
}