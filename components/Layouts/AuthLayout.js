import { data } from 'autoprefixer'
import React from 'react'
import { NavigationLinks } from '../../data/tradaxs'
import NavLink from './NavLink'
import TopBar from './TopBar'
export const SideBar =  ()=>{
    return(
        <div className=
        {`bg-accent
        w-[240px]
        h-screen
        py-[50px]
        rounded-r-[10px]
        hidden
        md:flex
        md:flex-col
       
        
        gap-y-[40px]
        
        `}>
            {/* Nav Links */}
            {NavigationLinks.map((data)=><NavLink data={data} key={data.name}>
                {data.name}
            </NavLink>)}
        </div>
    )
}
export const Navbar = ({title})=>{
return(
    <div className='bg-white px-[40px] w-[100%] min-h-[60px] flex'>
      <TopBar title={title}/>
  
    </div>
)
}
const AuthLayout = ({children,title}) => {
  return (
    <div className='flex '>
        <SideBar/>
        <div className='w-[100%]'>
            <Navbar title={title}/>
            <hr/>
            <div className='px-[40px]'>
            {children}  
            </div>
           
        </div>
    </div>
  )
}

export default AuthLayout