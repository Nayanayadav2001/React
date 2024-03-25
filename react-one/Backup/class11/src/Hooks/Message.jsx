import React, { useState } from "react";

let Message = () => {
      
   let [state,setState] = useState("Hello")
     
     return <div>
        <h2>Message Component </h2>
        <h3>Value:{state}</h3>
        <button onClick = {() => {setState("Good Morning")}}>GM</button>
        <button onClick = {() => {setState("Good Night")}}>GN</button>
     </div>

}
export default Message