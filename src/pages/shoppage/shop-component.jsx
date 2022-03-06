import React from 'react'

import shopData from './shop-data'
import {CollectionPreview} from '../../components/collection-preview/collection-preview-component'
import './shop-styles.scss'

class ShopPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            collections: shopData
        }
    }

    render() {
        const { collections } = this.state
        return(
            <div className='shoppage'>
                {
                    collections.map(({id, ...otherProperties}) => (
                        <CollectionPreview key={id} {...otherProperties}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage