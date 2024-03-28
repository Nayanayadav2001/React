import React from "react";
import { useDispatch,useSelector} from "react-redux";
import {incrAction ,decrAction} from "../redux/product/prod.action";



let Product = () => {
    let dispatch = useDispatch()
    let prod_Obj = useSelector((state)=>{
        return state
    })



    let incrHandler = () => {
         dispatch(incrAction())
    }

    let decrHandler = () => {
         dispatch(decrAction())
    }


    return <div>
          <h2>Product Component</h2>
          <br />
          <pre>{JSON.stringify(prod_Obj)}</pre>
          <button onClick={decrHandler}>DECR</button>
          1
          <button onClick={incrHandler}>INCR</button>
    </div>
}

export default Product