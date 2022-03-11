export const addItemToCart = (cartItems, payload) => {
    const existing = cartItems.find(item => item.id === payload.id)

    if(existing) {
        return cartItems.map(item => (
            item.id === payload.id ?
            {...item, quantity: item.quantity + 1} :
            item
        ))
    }

    return [...cartItems, {...payload, quantity: 1}]

}

export const removeItem = (cartItems, payload) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === payload.id)

    if(existingItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== payload.id)
    }

    return cartItems.map(cartItem => (
        cartItem.id === payload.id ? 
        {...cartItem, quantity: cartItem.quantity - 1}: 
        cartItem
    ))
}