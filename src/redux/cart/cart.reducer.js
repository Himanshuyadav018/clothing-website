import {addItemToCart, removeItem } from './cart.utils'

const Initial_State = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state=Initial_State, action) => {
    switch(action.type) {
        case 'TOGGLE_CART_DROPDOWN':
            return ({
                ...state,
                hidden: !state.hidden
            })
        case 'ADD_CARTITEM':
            return({
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            })
        case 'REMOVE_CARTITEM':
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
            }
        default: return state
    }
}

export default CartReducer