
import {BASE_API_URL} from '../component/commons/Constants';
import {get,post, deletex, put} from '../component/commons/HttpComunications';

import {itemSaveSuccess,itemsHasErrored,
    itemsFetchDataSuccess,
    itemsDeleteSuccess} from './state/actions';


const ITEMS_URL = BASE_API_URL.concat("/items");

export const itemGet  = ()=> dispatch =>{    
    return get(ITEMS_URL.concat("?_sort=id&_order=desc"),
        response => dispatch(itemsFetchDataSuccess( response.data)),
        error => dispatch(itemsHasErrored(error)));     
}
export const deleteItem  = (id)=> dispatch =>{    
    return deletex(ITEMS_URL.concat("/".concat(id)),
        response => dispatch(itemsDeleteSuccess(response.data)),
        error => dispatch(itemsHasErrored(error)));     
}
export const postItem  = body => dispatch =>  {
    
    return post(ITEMS_URL,body,
        response => dispatch(itemSaveSuccess( response.data)),
        response => dispatch(itemsHasErrored(true)));     
};

export const putItem  = (id,body) => dispatch =>  {
       return put(ITEMS_URL.concat("/").concat(id),body,
        response => dispatch(itemSaveSuccess( response.data)),
        response => dispatch(itemsHasErrored(true)));     
};

