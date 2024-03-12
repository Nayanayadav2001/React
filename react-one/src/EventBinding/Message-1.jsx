import React, {Component} from "react"


class Message extends React.Component{
    state;
    constructor(props){
        super(props)
        console.log("First Constructor")
            this.state = {
              msg : "Hello"
            }
        }
            gmHandler = (Value) => {
                this.setState({msg : "Good Morning"})
            }

            gaHandler = (Value) => {
                this.setState({msg : "Good Afternoon"})
            }

            geHandler = (Value) => {
                this.setState({msg : "Good Evening"})
            }

            gnHandler = (Value) => {
                this.setState({msg : "Good Nigth"})
            }
            render() {
                console.log("Second Render")
                return (<div>
                    <h2>Message Component</h2>
                    <hr/>
                    <h3>Value:{this.state.msg}</h3>
                    <button onClick = {this.gmHandler}>GM</button>
                    <button onClick = {this.gaHandler}>GA</button>
                    <button onClick = {this.geHandler}>GE</button>
                    <button onClick = {this.gnHandler}>GN</button>
                </div>
                )
    }
}
export default Message