import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


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
           toast.success("Muvaffaqiyatli o‘tildi")
           navigete('/home') 
        }).catch(err=>{
            console.log(err);
            toast.error("Xatolik yuz berdi. Qayta urining")
        })
    }
  return (
<div className="">
<div className="max-w-[1240px] h-[100vh] mx-auto flex justify-center items-center">
    <div className="w-[450px]">
        <form className="border-2 border-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                    Phone
                </label>
                <input className="shadow appearance-none border border-white bg-none rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="username" 
                    type="text" 
                    placeholder="phone"
                    onChange={(e)=>setPhone(e?.target?.value)}
                />
            </div>
            <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-white bg-none rounded-md w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" 
                    type="password" 
                    placeholder="**********"
                    onChange={(e)=>setPassword(e?.target?.value)}
                />
            </div>
            <div className="flex items-center justify-between">
                <button 
                    className="text-xl text-white font-medium border border-white px-3 py-1 rounded-md hover:text-[#03e2ff] hover:border-[#03e2ff]" 
                    type="button" 
                    onClick={btn} 
                    >
                    Sign In
                </button>
                <button 
                    className="text-xl text-white font-medium border border-white px-3 py-1 rounded-md hover:text-[#03e2ff] hover:border-[#03e2ff]"
                    onClick={() => btn(false)}
                    >
                    Canel
                </button>
                
            </div>
        </form>
            <p className="text-center text-gray-200 text-xs">
            &copy;2025 Mashgulot ro'yxatdan o'ting, siz bn Name_uz.
            </p>
    </div>
</div>
</div>
  )
}

export default Login