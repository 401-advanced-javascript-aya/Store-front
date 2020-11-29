import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categoruActivator from './categories-reducer';
import list from './product-reducer';

let reducers = combineReducers({categoruActivator , list});

const store = () => {
    return createStore(reducers, composeWithDevTools());

};

export default store() ;