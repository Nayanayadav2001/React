import {createStore} from 'redux'
import { prodReducer } from "./product/prod.reducer-1";

let store = createStore(prodReducer)

export {store}