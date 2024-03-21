import React, {Component} from "react";
import Navbar from "./Navbar/Navbar-1";
import Message from "./Hooks/Message";

class App extends Component{
    render() {
        return <div>
             <Navbar />
             <Message/>
        </div>
    }
}

export default App