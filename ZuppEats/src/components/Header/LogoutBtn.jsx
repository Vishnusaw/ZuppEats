import React from 'react'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import { IoIosLogOut } from "react-icons/io";

const LogoutBtn = () => {

    const dispatch = useDispatch();

    const logoutHandler = ()=>{
        authService.logout().then(()=>{
          dispatch(logout());
        })
    }
    
  return (
    <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-200 
    hover:text-orange-600 rounded-full'><IoIosLogOut className='inline-block' />Logout</button>
  )
}

export default LogoutBtn;