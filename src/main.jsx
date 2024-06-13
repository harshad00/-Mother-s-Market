import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store.js'
import Signup from './pages/Signup.jsx'
import { AuthLayout, Login } from './components/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <Signup />
            </AuthLayout>
        ),
    },
      {
        path: "/login",
        element: (
            <AuthLayout authentication={false}>
                <Login />
            </AuthLayout>
        ),
    },
      {
        path: "/about-us",
        element: <AboutUs/>,
      },
    ]
  },
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
  <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>
)
