import React, { useState, useEffect } from 'react'
import Logo from '../assets/images/logo/barrackbuddy-logo-1@2x.png'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

import {Link} from 'react-router-dom'



function Button({ children, onClick, className, type = "button" }) {
    return (
      <button
        type={type}
        className={`px-4 py-2 my-6 rounded-[100px] ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }



export default function AuthPage() {

    const [selectedOption, setSelectedOption] = useState("Login");

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


    const renderButton = (option, label) => {
        return (
          <Button
            className={`flex-1 rounded-[100px] ${selectedOption === option ? "bg-[#2F5325] text-white" : "text-black"}`}
            onClick={() => setSelectedOption(option)}
          >
            {label}
          </Button>
        );
      };


  return (
        <>
            <div className="w-screen">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                        <Link to="/" className="flex items-center mb-1 text-2xl font-semibold">
                            <img className="w-[12rem] h-[12rem]" src={Logo} alt="logo"/>
                        </Link>


                                 {/* Toggle Buttons */}
                            <div className="flex rounded-[100px] bg-lightGrey w-[200px] lg:w-[300px] sm:w-[210px] md:w-[250px]">
                            {renderButton("Sign up", "Sign up")}
                            {renderButton("Login", "Login")}
                            </div>

                            {selectedOption === "Login" && (
                                <LoginForm/>
                             )}
                             {selectedOption === "Sign up" && (
                                    <RegisterForm/>
                            )}
        


                    </div>

                    

            </div>
        </>
  )
}
