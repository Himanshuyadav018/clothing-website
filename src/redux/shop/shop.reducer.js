import SHOP_DATA from "./shop-data"

const Initial_State = {
    ShopData: SHOP_DATA
}

const ShopReducer = (state=Initial_State, action) => {
    switch(action.type) {
        default: return {
            ...state
        }
    }
}

export default ShopReducer