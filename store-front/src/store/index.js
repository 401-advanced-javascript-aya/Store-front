import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categoryActivator from './categories-reducer';
import list from './product-reducer';

let reducers = combineReducers({categoryActivator , list});

const store = () => {
    return createStore(reducers, composeWithDevTools());

};

export default store() ;