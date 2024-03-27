import React from "react";
import Message from "./Message/Message";
import {store} from './redux/store'
import { Provider } from "react-redux";

let App = () => {

    return <div>
        <Provider store={store}>
           <Message/>
        </Provider>
    </div>
}

export default App