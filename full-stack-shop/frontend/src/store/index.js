import {createStore} from "redux"
import { combineReducers } from "redux";
import {countReducer,productReducer} from "./reducers";


const rootReducer = combineReducers({
    count:countReducer,
    products: productReducer
}) 

export const store = createStore(rootReducer);
