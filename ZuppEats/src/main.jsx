import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import MenuList from './pages/MenuList.jsx'


import AuthLayout from './components/AuthLayout.jsx'
import store from './store/store.js'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import {Provider} from "react-redux"


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:(
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path:'restaurant/:restId',
        element:<MenuList />
      }
    ]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
)
