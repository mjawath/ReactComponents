
import {BASE_API_URL} from '../component/commons/Constants';
import {get,post} from '../component/commons/HttpComunications';

import {itemSaveSuccess,itemsHasErrored,
    itemsFetchDataSuccess} from './state/actions';


const ITEMS_URL = BASE_API_URL.concat("/items");

export const itemGet  = ()=> dispatch =>{    
    return get(ITEMS_URL.concat("?_sort=id&_order=desc"),
        response => dispatch(itemsFetchDataSuccess( response.data)),
        error => dispatch(itemsHasErrored(error)));     
}

export const postItem  = body => dispatch =>  {
    
    return post(ITEMS_URL,body,
        response => dispatch(itemSaveSuccess( response.data)),
        response => dispatch(itemsHasErrored(true)));     
};

// export const fetchCourseInformation = (collectionId) => dispatch => {
//     get(api.get_course_information.replace('{collection-id}', collectionId))
//         .then(response => dispatch(getCourseInfoSuccess(response)));
// };

// export const createPart = (collectionId, requestBody) => dispatch => {
//     post(api.create_part.replace('{collection-id}', collectionId), requestBody)
//         .then(response => dispatch(getCollectionSuccess(response)))
//         .catch(error => dispatch(apiFailed(error)));
// };

// export const patchTableOfContents = (collectionId, tableOfContents) => dispatch => {
//     patch('/api/collections/' + collectionId + '/tocpage', tableOfContents)
//         .then(tableOfContents => {
//             dispatch(patchTableOfContentsSuccess(tableOfContents));
//             dispatch(fetchLastModifiedTime(collectionId));
//         }).catch(error => dispatch(apiFailed(error)));
// };
// export const copyCollection = (collectionId, title, collectionType, collectionResources) => dispatch => {
//     return post('/api/collections/'.concat(collectionId).concat('/copy'), {
//         targetCollectionTitle: title,
//         targetCollectionType: collectionType,
//         targetCollectionResources: collectionResources
//     }).then(() => dispatch(fetchUserCollections()));
// };

