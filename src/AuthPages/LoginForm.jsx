import React, {useState} from 'react'

export default function LoginForm() {

    const [showPassword, setShowPassword] = useState('password');

    const toggleInputType = () => {
        setShowPassword((prevType) => (prevType === "password" ? "text" : "password"));
      };
  return (
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-300 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                    
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ml-3">Your email</label>
                        <input type="email" name="email" id="email" className="pl-3 bg-gray-50 border-2 border-[#2F5325] border-spacing-2 text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ml-3">Password</label>
                        <input type={showPassword} name="password" id="password" placeholder="••••••••" className="pl-3 bg-gray-50 border-2 border-[#2F5325] border-spacing-2 text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                    </div>

                    <span className='cursor-pointer' onClick={toggleInputType}>
                            {showPassword === "password" ? "Show" : "Hide"} Password
                        </span>

                    <button type="submit" className="w-full text-white bg-[#2F5325] bg-primary-600 font-medium rounded-3xl text-sm px-5 py-4 text-center">Sign in</button>
                 
                </form>
            </div>
        </div>
  )
}
