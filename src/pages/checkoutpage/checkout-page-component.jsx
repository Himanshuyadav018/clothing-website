import React from 'react';
import {connect } from 'react-redux'

import './checkout-page-styles.scss'

import CheckoutItems from '../../components/checkout-item/checkout-item-component'
import StripeButton from '../../components/stripe-button/stripe-button-component'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span className="title">Image</span>
            </div>
            <div className='header-block'>
                <span className="title">Name</span>
            </div>
            <div className='header-block'>
                <span className="title">Price</span>
            </div>
            <div className='header-block'>
                <span className="title">Quantity</span>
            </div>
            <div className='header-block'>
                <span className="title">Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItems key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        <div className='total'>
            <span>TOTAL: ${ total ? total : 0}</span>
        </div>
        <div className='stripe-button'>
        <StripeButton price={total}/>
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage)