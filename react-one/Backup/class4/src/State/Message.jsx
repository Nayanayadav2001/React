import React, {Fragment} from "react";
class Message extends React.Component{

    msg='Hello'
    gmHandler(){
        console.log("GM")
    }

        render(){

            return <Fragment>
                <h2>{this.msg}</h2>
                <button onClick={this.gmHandler}>GM</button>
            </Fragment>
        }
}

export default Message