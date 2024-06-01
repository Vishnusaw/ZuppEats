import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import { Cart,Category,Home } from './Components/index.js'
import './index.css'


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} ></Route>
      <Route path='cart' element={<Cart/>}></Route>
      <Route path='category' element={<Category/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
