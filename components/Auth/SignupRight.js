import React from 'react'
import SignUpForm from './SignUpForm'

const SignupRight = () => {
  return (
    <div className='flex 
    px-[80px]
    justify-center items-center
    
    '>
        <div className='
        rounded-[30px]
        p-[30px]
        bg-[rgba(255,255,255,0.75)] 
        min-w-[90vw]
        md:min-w-[539px]'>
            {/* Headers */}
            <div className='
            flex flex-col
            md:flex md:flex-row mb-[20px] justify-between'>
                <div>
                <h5 className='text-[25px] leading-[31px]
                
                '>
                    Welcome to Tradaxs
                </h5>
                <h5 className='text-[35px] md:text-[55px] font-medium'>
                    Sign up
                </h5>
                </div>
                <div>
                    <p
                    className='text-grayText text-[13px] leading-[20px]'
                    >Have an Account?</p>
                    <a className="text-buttonBlue ">
                        Sign In
                    </a>
                </div>
             
            </div>
            {/* Form Components itself */}
            <SignUpForm/>
        </div>
    </div>
  )
}

export default SignupRight