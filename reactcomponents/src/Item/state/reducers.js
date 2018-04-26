
import * as types from "./types";

export const item = (state ={},action)=>{
    switch(action.type){
        case types.FETCH_LIST_COMPLETED:
         return  {items:action.payload};
        default :
        return  state
    }
}    


