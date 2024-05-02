import cartReducer from "./cartReducer";
import product from "./product";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        //   myNumber:changeTheNumber
        product,
        cartReducer
    }
);

export default reducers;