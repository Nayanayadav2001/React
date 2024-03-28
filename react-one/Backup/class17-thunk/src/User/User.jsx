import React,{useEffect}from "react"
import { useDispatch,useSelector} from "react-redux"
import { user_Action } from "../redux/user/user.action"


let User = () => {
    let dispatch = useDispatch()
    let user_Data = useSelector((state)=>{
        return state
    })

     useEffect (() => {
          dispatch(user_Action())
     },[])

    return <div>
        <h3>User Component</h3>
        <pre>{JSON.stringify(user_Data)}</pre>
    </div>
}
export default User