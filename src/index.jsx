import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

const store = createStore(rootReducer);

function printStore(){
  console.log(store.getState());
}

store.subscribe (() => {
  console.log('store change\nfrom index.jsx\n', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
    <button onClick={printStore}>PRINT STORE</button>
  </Provider>,
  document.getElementById('app')
);
