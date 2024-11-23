import React, { useState } from 'react';
import axios from 'axios'; // Make sure to import axios if not already imported
import { BaseUrl } from '../enviroment/Enviroment';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState('password');

  const navigate = useNavigate();
  
  const toggleInputType = () => {
    setShowPassword((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BaseUrl}/api/auth/login`, {
        email: email,
        password: password,
      });

      if (response.status == 200) {
        localStorage.setItem("token" ,response.data.access_token ) 
        navigate('/');
      }
     
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return (
    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-300 ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl ">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ml-3">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="pl-3 bg-gray-50 border-2 border-[#2F5325] border-spacing-2 text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ml-3">Password</label>
            <input
              type={showPassword}
              name="password"
              id="password"
              placeholder="••••••••"
              className="pl-3 bg-gray-50 border-2 border-[#2F5325] border-spacing-2 text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <span className='cursor-pointer' onClick={toggleInputType}>
            {showPassword === "password" ? "Show" : "Hide"} Password
          </span>

          <button
            type="submit"
            className="w-full text-white bg-[#2F5325] bg-primary-600 font-medium rounded-3xl text-sm px-5 py-4 text-center"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
