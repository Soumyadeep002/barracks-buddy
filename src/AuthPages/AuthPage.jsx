import React from 'react'
import Logo from '../../public/images/logo/barrackbuddy-logo-1@2x.png'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function AuthPage() {
  return (
        <>
            <div className="w-screen py-20">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-16">
                        <a href="#" className="flex items-center mb-1 text-2xl font-semibold">
                            <img className="w-[12rem] h-[12rem]" src={Logo} alt="logo"/>
                        </a>

                        <div className='flex'>
                            <button className='text-black '>Sign In</button>
                            <button className='text-black '>Sign Up</button>
                        </div>
                        


                            <LoginForm/>
                            <RegisterForm/>
        


                    </div>

                    

            </div>
        </>
  )
}
