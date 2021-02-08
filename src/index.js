import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {createStore, applyMiddleware, combineReducers} from 'redux';
//import usersReducer from './utils/reducers/users_reducer';
//import classesReducer from './utils/reducers/classes_reducer';
//import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
//import thunk from 'redux-thunk';
//import logger from 'redux-logger';

//const indexReducer = combineReducers({usersReducer: usersReducer, classesReducer: classesReducer});
//const store = createStore(indexReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <Router>
    <App />
    </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
