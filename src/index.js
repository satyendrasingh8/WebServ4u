import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ReactGA from 'react-ga';


const store = createStore(rootReducer,
    applyMiddleware(thunk),

);
const APP = (
  <Provider store={store}>
  <App />
</Provider>
);
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(APP, rootElement);
} else {
  ReactDOM.render(APP , rootElement);
}

ReactGA.initialize('UA-188434574-1');
ReactGA.pageview(window.location.pathname + window.location.search);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
