import { Link, useNavigate } from "react-router-dom"
import { signupPostType } from "@abhiruppann/blog-common"
import React, { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
function Auth({type}: {type: "signin" | "signup"}) {
   
  const [sign, setSign] = useState<signupPostType>({
    name: "",
    email:"",
    password:""
  })
  const navigate = useNavigate();
  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, sign);
        const data = response.data;
        console.log(response.statusText);
        localStorage.setItem("userInfo", data);
        navigate("/blogs");
    }
    catch (error) {
        alert("Don't cry")
    }

}
  return (
  
  <div className="flex h-screen lg:w-[50%] w-[100%] flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto w-[150px]" src="https://as2.ftcdn.net/v2/jpg/02/44/68/97/1000_F_244689725_wCaHdOOJohF5fDtXvhj4Hid1JvZYqwJc.jpg" alt="Your Company"/>
      {type== "signup" ?<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>:
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>}
    </div>
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST" onSubmit={(e: React.ChangeEvent<HTMLFormElement>)=>{handleOnSubmit(e)}}>
        {type=="signup" ? <div>
          <label htmlFor='username' className="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div className="mt-2">
            <input  id="username" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setSign({...sign, name: e.target.value})}} name="username" type="text" autoComplete='username' required className="block w-full px-[1vw] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>: null}
        <div>
          <label htmlFor='email' className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setSign({...sign, email: e.target.value})}} name="email" type="email" autoComplete='email' required className="block w-full px-[1vw] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div className="mt-2">
            <input id="password" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setSign({...sign, password: e.target.value})}} name="password" type="password"  required className="block w-full px-[1vw] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
  
        <div>
            { type=="signup" ? <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>: 
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>}
          
        </div>
      </form>
      {type== "signin" ? 
      <Link to="/signup"><p className="mt-10 text-center text-sm text-gray-500">
        Not a member?<a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">SignUp</a></p></Link>
    :<Link to="/signin"><p className="mt-10 text-center text-sm text-gray-500">
        Already a member?<a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</a>
     </p></Link>}

    </div>
  </div>
  
  )
}

export default Auth
