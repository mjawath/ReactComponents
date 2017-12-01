import { createStore, applyMiddleware,combineReducers } from 'redux';
import { reducer as formReducer  } from 'redux-form';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;
