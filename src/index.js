import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import challengeReducer from './reducers/challengeReducer'

import {BrowserRouter as Router} from 'react-router-dom'

//gives access to dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  challengeReducer,
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
