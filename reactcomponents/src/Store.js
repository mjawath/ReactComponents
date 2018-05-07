import { createStore, applyMiddleware,combineReducers } from 'redux';
import { reducer as formReducer  } from 'redux-form';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import {ADD_ITEM} from "./Item/ItemDetailUI";
import {ADD_ITEM} from "./Item/state/types";
import {item} from './Item/state/reducers';
import  {ui} from './component/UIReducer';


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer.plugin({
        item:(state,action)=>{

            switch (action.type){
                // case ADD_ITEM:
                //     let value = state.fields.qty;
                //     let nlastName = "state.fields.lastName? (state.fields.lastName+ value): value";
                //     // let newvalues = [lastName];
                //     return {...state,fields:{...state.fields,lastName:nlastName}};
                default: state;


            }
            return state;

        }
    }),
    itemForm:item,
    ui:ui
});

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;
