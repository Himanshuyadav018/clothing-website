import React from 'react';
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item-component'

import './collection-page-styles.scss';

import {selectSpecificCollection} from '../../redux/shop/shop.selector'

const CollectionPage = ({collection}) => {
    const {collectionId} = useParams()
    const Collection = collection(collectionId)
    return(
    <div className='collection-page'>
        <h2 className='title'>{Collection.title}</h2>
        <div className='items'>
        {
            Collection.items.map(item => (
                <CollectionItem key={item.id} item={item}/>
            ))
        }
        </div>
    </div>
)}

const mapStateToProps = (state) => ({
    collection: prop => selectSpecificCollection(prop)(state)
})

export default connect(mapStateToProps)(CollectionPage)