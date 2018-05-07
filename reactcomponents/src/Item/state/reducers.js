
import * as types from "./types";

export const item = (state ={},action)=>{
    switch(action.type){
        case types.FETCH_LIST_COMPLETED:
         return  {items:action.payload};         
         case types.POST_ITEM_COMPLETED:
         console.log(action.payload);
         return  {item:{}};                  
         case types.FETCH_DETAILS_FAILED:
         return  {error:action.payload};        
        default :
        return  state
    }
}    


