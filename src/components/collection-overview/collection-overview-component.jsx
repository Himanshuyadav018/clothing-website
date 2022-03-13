import React from 'react'
import {connect} from 'react-redux'

import './collection-overview-styles.scss';

import {CollectionPreview} from '../../components/collection-preview/collection-preview-component'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'


const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
    {
        collections.map(({id, ...otherProperties}) => (
            <CollectionPreview key={id} {...otherProperties}/>
        ))
    }
    </div>
)

const mapStateToProps = (state) => ({
    collections: selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionOverview)