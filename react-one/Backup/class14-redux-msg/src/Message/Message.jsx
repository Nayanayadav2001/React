import React from 'react';
import {gmAction,gnAction} from '../redux/msg/msg.action'
import { useDispatch, useSelector } from 'react-redux';


let Message = () => {
    
    let dispatch = useDispatch()
    let message = useSelector((state)=>{
        return state.message
    })

    let gmHandler = () => {
        dispatch(gmAction())
    }
    let gnHandler = () => {
        dispatch(gnAction())
    }

    return <div>
        <h2>Message Component</h2>
        <hr />
        <h1>{JSON.stringify(message)}</h1>
        <h3>Message:{message}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
}

export default Message