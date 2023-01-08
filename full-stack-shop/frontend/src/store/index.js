import {createStore} from "redux"
import { combineReducers } from "redux";
import {countReducer,pagesReducer,productReducer} from "./reducers";


const rootReducer = combineReducers({
    count:countReducer,
    products: productReducer,
    page: pagesReducer
}) 

export const store = createStore(rootReducer);
