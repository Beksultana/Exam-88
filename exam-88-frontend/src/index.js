import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware, ConnectedRouter} from 'connected-react-router';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import App from './App';

import categoriesReducer from './store/reducers/categoriesReducer';
import productsReducer from './store/reducers/productsReducer';
import usersReducer from './store/reducers/userReducer';

const saveToLocalStorege = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }catch (e) {
        console.log('Could not save state')
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null){
            return undefined;
        }

        return JSON.parse(serializedState)
    }catch (e) {
        return undefined
    }
};

const persistedState = loadFromLocalStorage();

const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    categories: categoriesReducer,
    products: productsReducer,
    users: usersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer,persistedState, enhancers);

store.subscribe(() => {
    saveToLocalStorege({
        users: {
            user: store.getState().users.user
        }
    });
});

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
