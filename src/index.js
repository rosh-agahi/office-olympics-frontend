import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import challengeReducer from './reducers/challengeReducer'
import pickReducer from './reducers/pickReducer'

//gives access to dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  challengeReducer,
  pickReducer,
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
