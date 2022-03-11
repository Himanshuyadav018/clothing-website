import {createSelector} from 'reselect';

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity, 0)
)