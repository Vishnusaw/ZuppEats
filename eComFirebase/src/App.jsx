import React from 'react'
import {Button} from '@material-tailwind/react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NoPage from './pages/noPage/NoPage'
import ProductInfo from './pages/productInfo/ProductInfo'
import ScrollTop from './components/scrollTop/ScrollTop'
import CartPage from './pages/cart/CartPage'
import AllProduct from './pages/allProduct/AllProduct'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import UserDashboard from './pages/user/UserDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import AddProductPage from './pages/admin/AddProductPage'
import UpdateProductPage from './pages/admin/UpdateProductPage'

function App() {
  

  return (
    <Router>
      <ScrollTop/>
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='/*' element={<NoPage/>}></Route>
        <Route path='/productinfo' element={<ProductInfo/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/allproduct' element={<AllProduct/> }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='user-dashboard' element={<UserDashboard/>}></Route>
        <Route path='admin-dashboard' element={<AdminDashboard/>}></Route>
        <Route path='addproduct' element={<AddProductPage/>}></Route>
        <Route path='updateproduct' element={<UpdateProductPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
