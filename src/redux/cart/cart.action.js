export const toggleCartDropdown = () => ({
    type: 'TOGGLE_CART_DROPDOWN'
})

export const addCartitem = (item) => ({
    type: 'ADD_CARTITEM',
    payload: item
})

export const removeItem = (item) => ({
    type: 'REMOVE_CARTITEM',
    payload: item
})

export const removeItemFromCart = (item) => ({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: item
})