import React, { useRef } from "react";


let Reg = () => {
   let btnRef = useRef()


   let acceptTC = (event) => {
       console.log(event.target.checked)
       btnRef.current.disabled = false


       if(event.target.checked == true){
        btnRef.current.disabled = false
       }
       else{
        btnRef.current.disabled = true
       }
   }


    return <div className="container">
      <div className="row">
        <div className="col-md-4">
        <form>
             <div className="form-group" >
             <input className="form-control" type="text" placeholder="User-Name"/></div>
             <div className="form-group">
                 <input className="form-control" type="text" placeholder="Mobile No"/></div>
                 <div className="form-check">
                 <input type="checkbox" onChange={acceptTC} /> Please accept T&C
                 </div>
                 <input type="submit" value="Registration" className="btn btn-primary" disabled ref={btnRef}/>
             </form>
        </div>
        </div>
      </div> 
}
export default Reg