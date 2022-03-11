import React from 'react'
import { connect } from 'react-redux'

import './cart-icon-styles.scss';
import {ReactComponent as ShoppingIcon} from '../../utilities/shopping-bag.svg';
import {toggleCartDropdown} from '../../redux/cart/cart.action'
import {selectCartItemCount} from '../../redux/cart/cart.selectors'

const CartIcon = ({toggleCartDropdown, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartDropdown}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)