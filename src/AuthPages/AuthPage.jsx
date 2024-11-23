import React, { useState, useEffect } from 'react'
import Logo from '../../public/images/logo/barrackbuddy-logo-1@2x.png'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'



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
            <div className="w-screen py-20">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-16">
                        <a href="#" className="flex items-center mb-1 text-2xl font-semibold">
                            <img className="w-[12rem] h-[12rem]" src={Logo} alt="logo"/>
                        </a>

                        {/* <div className='flex overflow-hidden rounded-3xl bg-gray-200 border-2 border-[#2F5325]'>
                            <button className='text-white px-5 py-2 bg-[#2F5325]'>Sign In</button>
                            <button className=' px-5 py-2 '>Sign Up</button>
                        </div> */}
                        

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
