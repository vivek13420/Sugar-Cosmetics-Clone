import {legacy_createStore,applyMiddleware,compose} from 'redux';
import {reducer} from './AppReducer/reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS__EXTENSION_COMPOSE__|| compose;

const store = legacy_createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);
export {store};