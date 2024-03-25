import React, {useState} from "react";

const Message = () =>{
    //let msg = 'Hello'
    let [variable , setVariable] = useState("Hello")

    let gmHandler = () => {
        setVariable("Good Morning")
    }
    let gaHandler = () => {
        setVariable("Good Afternoon")
    }

    return <>
        <h3>Message Component</h3>
        <h4>Wish:{variable}</h4>
           <button onClick={gmHandler}>GM</button>
           <button onClick={gaHandler}>GA</button>
    </>
}
export default Message 