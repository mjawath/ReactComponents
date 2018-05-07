
// https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/introduction.md
const UI_LOAD = "UI_LOAD";

export const ui = (state ={},action)=>{
    switch(action.type){
         case UI_LOAD:
            const {meta} = action;
            if(meta){
                return { meta};
            }else{
                return state;
            }
        default :
        return  state
    }
}    


export const loading = (meta) => ( {
    type: UI_LOAD ,  
    meta
} );

