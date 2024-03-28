import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from "@redux-devtools/extension";
import { userReducer } from "./user/user.reducer";
import {thunk} from 'redux-thunk'
import logger from 'redux-logger';


let store = createStore(userReducer,composeWithDevTools(applyMiddleware(thunk,logger)))

export {store}