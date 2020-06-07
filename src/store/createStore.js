// core libraries
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import * as immutable from 'redux-immutable-state-invariant';

// reducers
import allReducers from '../reducers'

const middleware = [
    thunk,
    immutable.default()
]

export default createStore(
    allReducers,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);