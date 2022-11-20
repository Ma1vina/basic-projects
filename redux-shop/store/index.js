import {createStore} from "redux"
import { combineReducers } from "redux";
import {countReducer} from "./countReducer";

const rootReducer = combineReducers({
    count:countReducer
}) 

export const store = createStore(rootReducer);
