import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes'
import './globalStyle.css';

import history from './history';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter history={history}>
      <Routes/>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
