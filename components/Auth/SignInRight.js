import Link from 'next/link'
import React from 'react'
import { paths } from '../../api/paths'
import SignInForm from './SignInForm'

import SignUpForm from './SignUpForm'

const SignInRight = () => {
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
                    Welcome to <span className='text-buttonBlue'>
                        <Link href={"/"}>
                        <a >
                        Tradaxs
                        </a>
                        </Link>
                       
                 
                        </span> 
                </h5>
                <h5 className='text-[35px] md:text-[55px] font-medium'>
                    Sign in
                </h5>
                </div>
                <div>
                    <p
                    className='text-grayText text-[13px] leading-[20px]'
                    >Don&apos;t have an Account?</p>
                    <Link href={paths.SIGNUP}>
                    <a className="text-buttonBlue ">
                        Sign Up
                    </a>
                    </Link>
                    
                </div>
             
            </div>
            {/* Form Components itself */}
            <SignInForm/>
        </div>
    </div>
  )
}

export default SignInRight