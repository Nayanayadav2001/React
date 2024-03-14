import React, {Component} from "react"


class Message extends React.Component{
    state;
    constructor(props){
        super(props)
            this.state = {
              msg : "Hello"
            }
        }
            updateHandler = (value) => {
                this.setState({msg : value})
            }
            render() {
                return (<div>
                    <h2>Message Component</h2>
                    <hr/>
                    <h3>Value:{this.state.msg}</h3>
                    <button onClick = {this.updateHandler.bind(this,'Goodmorning')}>GM</button>
                    <button onClick = {this.updateHandler.bind(this,'Goodafternoon')}>GA</button>
                    <button onClick = {this.updateHandler.bind(this,'Goodevening')}>GE</button>
                    <button onClick = {this.updateHandler.bind(this,'Goodnight')}>GN</button>
                </div>
                )
    }
}
export default Message