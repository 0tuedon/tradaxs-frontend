import React from 'react'


export const SideBar =  ()=>{
    return(

        <div className=
        {`bg-accent
        max-w-[227px]
        `}>

        </div>
    )
}
const PublicLayout = ({children}) => {
  return (
    <div className='flex '>
        <SideBar/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default PublicLayout