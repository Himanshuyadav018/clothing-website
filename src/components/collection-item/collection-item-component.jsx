import React from 'react'
import {connect } from 'react-redux'

import './collection-item-styles.scss'
import CustomButton from '../custom-button/custom-button-component'
import {addCartitem} from '../../redux/cart/cart.action'

const CollectionItem = ({item, addCartitem}) => {
    const {name, price, imageUrl} = item
    return(
        <div className="collection-item">
            <div className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton className="custom-button" onClick={() => addCartitem(item)} inverted name="ADD TO CART"/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addCartitem: item => dispatch(addCartitem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)