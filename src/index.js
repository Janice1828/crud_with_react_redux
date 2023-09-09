import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({
  reducer:{
    //user //reducer name
  }
})
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


