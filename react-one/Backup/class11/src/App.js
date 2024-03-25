import React, {Component} from "react";
import Navbar from "./Navbar/Navbar-1";
import Counter from "./Hooks/Counter";

class App extends Component{
    render() {
        return <div>
             <Navbar />
             <br/>
             <Counter/>
        </div>
    }
}

export default App