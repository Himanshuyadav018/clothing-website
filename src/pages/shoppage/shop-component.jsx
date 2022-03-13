import React from 'react'
import {Routes, Route} from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview-component'
import CollectionPage from '../collectionpage/collection-page-component'

import './shop-styles.scss'

const ShopPage = () => {
    return(
    <div className='shoppage'>
        <Routes>
        <Route path={''} element={<CollectionOverview/>}/>
        <Route path={'/:collectionId'} element={<CollectionPage/>}/>
        </Routes>
    </div>
)}


export default ShopPage