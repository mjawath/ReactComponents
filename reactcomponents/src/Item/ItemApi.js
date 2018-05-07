
import { BASE_API_URL } from '../component/commons/Constants';
import { get, post, deletex, put } from '../component/commons/HttpComunications';

import {
    itemSaveSuccess, itemsHasErrored,
    itemsFetchDataSuccess,
    itemsDeleteSuccess
} from './state/actions';

import { loading } from '../component/UIReducer'


const ITEMS_URL = BASE_API_URL.concat("/items");

export const itemGet = (randomUIKey) => dispatch => {
    
    dispatch(loading({ key: randomUIKey, status: true }));
    return get(ITEMS_URL.concat("?_sort=id&_order=desc"),
        response => {
                dispatch(itemsFetchDataSuccess(response.data)); 
                dispatch(loading({ key: randomUIKey, status: false }));
        },
        error => {
            dispatch(itemsHasErrored(error));
            dispatch(loading({ key: randomUIKey, status: false }));
        });
}


export const geneGet = (config) => dispatch => {
    
    dispatch(loading({ key: config.randomUIKey, status: true }));
    return get(config.ITEMS_URL.concat("?_sort=id&_order=desc"),
        response => {
                dispatch(itemsFetchDataSuccess(response.data)); 
                dispatch(loading({ key: config.randomUIKey, status: false }));
        },
        error => {
            dispatch(itemsHasErrored(error));
            dispatch(loading({ key:config.randomUIKey, status: false }));
        });
}
export const deleteItem = (id) => dispatch => {
    return deletex(ITEMS_URL.concat("/".concat(id)),
        response => dispatch(itemsDeleteSuccess(response.data)),
        error => dispatch(itemsHasErrored(error)));
}
export const postItem = body => dispatch => {

    return post(ITEMS_URL, body,
        response => dispatch(itemSaveSuccess(response.data)),
        response => dispatch(itemsHasErrored(true)));
};

export const putItem = (id, body) => dispatch => {
    return put(ITEMS_URL.concat("/").concat(id), body,
        response => dispatch(itemSaveSuccess(response.data)),
        response => dispatch(itemsHasErrored(true)));
};

