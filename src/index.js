import React, {} from 'react';
import ReactDOM from 'react-dom';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ThatsBazaar from './components/Homepage';
import ErrorPage from './components/ErrorPage';
import Postings from './components/Postings';
import Register from './components/RegisterPage';
import Login from './components/LoginPage';
import PostDetails from './components/PostDetails'
import Settings from './components/AccountSettings';
import MyPosts from './components/MyPosts';

const router = createBrowserRouter([
    {
        path:'/',
        element: <ThatsBazaar />,
        errorElement:<ErrorPage />,
        children:[{
            path:'/postings',
            element: <Postings />
        },
        {
            path:'/postings/:idx',
            element: <PostDetails />
        },
        {
            path: '/settings',
            element: <Settings />,
            children:[{
                path:'/settings/myposts',
                element: <MyPosts />
            }]
        },
        {
            path:'/login',
            element: <Login />,
            children:[
                {
                    path:'/login/register',
                    element: <Register />
                },
            ]
        },]
    }
        ],
[])

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"))