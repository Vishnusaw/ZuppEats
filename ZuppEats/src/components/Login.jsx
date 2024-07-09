import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { login } from '../store/authSlice';
import {Button,Input} from './index'

export default function Login() {

    const [error,setError] =useState("");
    const {register,handleSubmit,formState:{errors}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = async (data)=>{
        setError("");
        // console.log(data);
        try{
            const session = await authService.login(data);
            if(session){
                const userData = await authService.getCurrentUser();
                if(userData) dispatch(login(userData));
                navigate("/");
            }
        }catch(error){
            setError(error.message);
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">


          <h2 className="text-2xl font-bold text-center mb-6 text-orange-500">Sign In</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    or create an account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>

            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form className="space-y-4" onSubmit={handleSubmit(loginHandler)}>

                <Input label="Email" type="email" placeholder="Enter your email" 
                    {...register("email",{
                        required:true,
                        validate:{matchPatern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                        "Email address must be a valid address"},
                        })}/>

                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              
               
              
                <Input label="Password" type="password" placeholder="Enter your password" 
                    {...register("password",{
                        minLength:{
                            value:4,
                            message:"Password length should be at least 4 "
                        },
                        required:true,
                        
                    })}/>
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
               

                <Button type="submit" className="w-full">Sign In</Button>
            </form>
          </div>
        </div>
      );
}
