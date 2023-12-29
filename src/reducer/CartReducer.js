const CartReducer = (state, action) =>{
    switch (action.type) {
        case "ADD_TO_CART":{
            let{id, color, amount, product} = action.payload;

            let cartProduct;

            cartProduct = {
                id: id+color,
                name: product.name,
                color,
                image: product.image[0].url,
                amount,
                price: product.price,
                stock: product.stock,
            }

            return{
                ...state,
                cart: [...state.cart,cartProduct],
            }
        }

        case "DELETE_ONE":{
           let ids = action.payload;
           let updatedCart = state.cart.filter((curElem) => curElem.id !== ids);

           return{
            ...state,
            cart: updatedCart,
           }
        }
        default:{
            return state;
        }
    }
}

export default CartReducer;