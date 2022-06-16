import React from 'react'

export const SideBar =  ()=>{
    return(

        <div className=
        {`bg-accent
        w-[227px]
        h-screen
        rounded-r-[10px]
        `}>

        </div>
    )
}
const AuthLayout = ({children}) => {
  return (
    <div className='flex '>
        <SideBar/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout