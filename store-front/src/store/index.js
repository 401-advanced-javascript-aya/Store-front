import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categoryActivator from './categories-reducer';
import list from './product-reducer';
import cart from './cart.js';


let reducers = combineReducers({categoryActivator , list, cart});

const store = () => {
    return createStore(reducers, composeWithDevTools());

};

export default store() ;