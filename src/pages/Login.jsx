import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzFmY2NmNjUtZTIzOC00N2NmLWE3MWItYTUyNmJhZDcyYmEzIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImlhdCI6MTczOTU0NTE5MSwiZXhwIjoxNzcxMDgxMTkxfQ.DJr8aIXip5vVm3gHIp38MG9l9XKh4jL60rVQDbp-HeQ"


    const [phone,setPhone] = useState('');
    const [password , setPassword] = useState('')
    const navigete = useNavigate()
    const btn = () =>{
        const formData = new FormData();
        formData.append('phone_number',phone)
        formData.append('password',password)
        axios({
            url:'https://realauto.limsa.uz/api/auth/signin',
            method:'POST',
            data:formData,
        }).then(res=>{
           localStorage.setItem('accessToken',res?.data?.data?.tokenks?.accessToken?.token)
           navigete('/home') 
        }).catch(err=>{
            console.log(err);
            
        })
    }
  return (
<div className="bg-gray-500">
<div className="max-w-[1240px] h-[100vh] mx-auto flex justify-center items-center">
    <div className="w-[450px]">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Phone
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" 
                    type="text" 
                    placeholder="phone"
                    onChange={(e)=>setPhone(e?.target?.value)}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" 
                    type="password" 
                    placeholder="**********"
                    onChange={(e)=>setPassword(e?.target?.value)}
                />
            </div>
            <div className="flex items-center justify-between">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="button" 
                    onClick={btn} 
                    >
                    Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
            <p className="text-center text-gray-900 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
            </p>
    </div>
</div>
</div>
  )
}

export default Login