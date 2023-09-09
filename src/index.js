import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Home from './Home';
import Create from './Create';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import userReducer from './userReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({
  reducer:{
    users:userReducer, //reducer name
  }
})
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <Provider store={store}>
    <App />
   
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/create" Component={Create} exact /> 
      </Routes>
    
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


