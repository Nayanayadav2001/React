import React, { useState } from "react";

let Message = () => {

   let [state,setState] = useState({id:101,name:'nayana'})
     
     return <div>
        <h2>Message Component </h2>
        <h3>Value:{JSON.stringify(state)}</h3>
        <button>GM</button>
        <button>GN</button>
     </div>

}
export default Message