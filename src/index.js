import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { store } from './Features/Store';
=======
import allReducers from './rerducers/index';
>>>>>>> parent of 12b5a90... first versioin of redux toolkit projects

const store =createStore(allReducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


