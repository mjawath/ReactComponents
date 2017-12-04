import * as types from './types';

const initialState={
    item : {
        code:"",
        desc:"",
        qty:20,
        amount:10
    }
};

export  const ItemR =(state=initialState,action)=>{
    switch ( action.type){
        case types.ADD_ITEM :
            let inI =  state.item;
            // inI.lastName = inI.lastName + action.payload;

            return  {...state,item: inI}
        default:
            return 'foh cool';
    }
};

// export default ItemR;

