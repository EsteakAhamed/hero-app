import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
        index: true,
        path: '/',
        Component: Home
    }]
},    
]);