import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home';
import AppDetails from '../Pages/AppDetails/AppDetails';
import AllApps from '../Pages/AllApps/AllApps';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/app/:id',
                Component: AppDetails
            },
            {
                path: '/apps',
                Component: AllApps 
            }
        ]
    }
]);