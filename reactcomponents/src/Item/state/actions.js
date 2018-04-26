import * as types from "./types";

export const fetchDetails = ( permalink ) => ( {
    type: types.FETCH_DETAILS,
    meta: {
        async: true,
        blocking: true,
        path: `/products/${ permalink }`,
        method: "GET",
    },
} );

export const itemsFetchDataSuccess = (payload) => ( {
    type: types.FETCH_LIST_COMPLETED  ,  
    payload
} );

export const itemsHasErrored = (data) => ( {
    type: types.FETCH_DETAILS_FAILED  ,  
    payload:data
} );

const addItem=
    (payload)=> {
        return{type:types.ADD_ITEM,payload:payload};
    }

