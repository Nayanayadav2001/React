import {INCR,DECR} from './prod.action'


let prodReducer = (state={qty:1},action) => {
     switch(action.type){
       case INCR:
        return {qty:state.qty +1}
        case DECR:
            return {qty:state.qty -1}
            default:
                return state
     }
}

export {prodReducer}