import {createSelector} from 'reselect';

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.ShopData
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => Object.values(collections)
)

export const selectSpecificCollection = (prop) => createSelector(
    [selectCollections],
    (ShopData) => ShopData[prop]
)