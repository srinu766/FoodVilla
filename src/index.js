import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './App';
import { RouterProvider } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <RouterProvider router={AppRouter}/>
  </React.Fragment>
);