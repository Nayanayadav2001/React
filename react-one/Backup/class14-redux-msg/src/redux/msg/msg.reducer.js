import {GM,GN} from './msg.action'


let initialState = {
    message:'Hello',
}
let messageReducer = (state=initialState,action) => {
    console.log('messagereducer')

    switch(action.type){
        case GM:
            return {message:'Good Morning'}
        case GN:
            return {message:'Good Night'}
            default:
                return state;
    }
}
export {messageReducer}
