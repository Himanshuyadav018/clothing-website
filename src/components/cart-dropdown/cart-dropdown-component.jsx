import React from 'react'
import {connect } from 'react-redux'
import {useNavigate} from 'react-router-dom'

import './cart-dropdown-styles.scss';
import CustomButton from '../custom-button/custom-button-component'
import CartItem from '../cart-item/cart-item-component'
import {toggleCartDropdown} from '../../redux/cart/cart.action'

const CartDropdown = ({cartItems, dispatch}) => {
    const navigate = useNavigate()
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => 
                 <CartItem item={cartItem}/>
                ) :
                <span className="empty-message">There are no cart items</span>
            }
        </div>
        <CustomButton onClick={() => {
            navigate('/checkout')
            dispatch(toggleCartDropdown())
        }} name="GO TO CHECKOUT"/>
    </div>
)}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)