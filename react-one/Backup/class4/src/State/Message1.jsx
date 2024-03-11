import React, {Fragment} from "react";
class Message extends React.Component{

    State={
        msg:'Hello',
        btnName:"Egg"
    }


    gmHandler = () => {
        this.setState({msg:'Good Morning'})
    }
    gaHandler = () => {
        this.setState({msg:'Good Afternoon'})
    }
    gnHandler = () => {
        this.setState({msg:'Good Night'})
    }

    render(){
        console.log("render method exec")
        return <Fragment>
            <h3>Value:{this.State.msg}</h3>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gaHandler}>GA</button>
            <button onClick={this.gnHandler}>GN</button>
        </Fragment>
    }
}

export default Message 