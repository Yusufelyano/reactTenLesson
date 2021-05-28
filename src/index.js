import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';


const reducer = (state = 0, actions) => {
  switch (actions.type) {
    case "plusOne":
      return state + 1;
    case "minusOne":
      return state - 1;
    case "reset": 
      return state = 0;
    case "addSelectedNumber":
      return parseInt(state) + parseInt(actions.number)


    default: return state;
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


