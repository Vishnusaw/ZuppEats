import React, { useState } from 'react'
import {Input,Button} from './index';
import { Link,useNavigate } from 'react-router-dom'
import {useForm} from "react-hook-form"
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

export default function Signup() {

    const [error,setError] = useState("");
    const {register,handleSubmit,formState:{errors}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const create=async (data)=>{
        setError("");
        try{
            const userData = await authService.createAccount(data);
            
            if(userData){
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


          <h2 className="text-2xl font-bold text-center mb-6 text-orange-500">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form className="space-y-4" onSubmit={handleSubmit(create)}>

                <Input label="Name" 
                    placeholder="Enter your name" 
                    {...register('name',{required:true})}
                    />

                <Input label="Email" type="email" placeholder="Enter your email" 
                    {...register("email",{
                        required:true,
                        validate:{matchPatern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                        "Email address must be a valid address"},
                        })}/>

                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              
                <Input label="Phone" type="tel" placeholder="Enter your phone number" 
                    {...register("phone",{
                        required:true,
                        pattern:{
                            value:/^[1-9][0-9]{9}$/,
                            message:"Enter a mobile number with 10 digit not starting with 0"
                        }
                    }
                    )}
                />
                 {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
              
                <Input label="Password" type="password" placeholder="Enter your password" 
                    {...register("password",{
                        minLength:{
                            value:4,
                            message:"Password length should be at least 4 "
                        },
                        required:true,
                        
                        
                    })}/>
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                {/* <Input label="Confirm Password" type="password" placeholder="Re Enter your password" /> */}

                <Input label="Address" type="textarea" placeholder="Enter your address" 
                {...register("address")} />
              
                <Button type="submit" className="w-full">Create Account</Button>
            </form>
          </div>
        </div>
      );
}
