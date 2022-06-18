import React from 'react'
import Image from 'next/image'
const Stats = () => {
    const test = [1,2,3]
  return (
    <div className=' hidden justify-between px-[100px]'>
        {/* Each of the stat card  */}
       {test.map((data)=> 
       <div key={data} className='flex items-center gap-x-[24px]'>
            <div>
                <Image 
                width={"60px"}
                height={"60px"}
                src={"/icons/chart.svg"} alt={"chart"}/>
            </div>
            <div className='flex flex-col'
            >
                <h3 
                className='text-[40px] 
                text-white
                font-bold'
                >$30B</h3>
                <p className='text-statsGray'>
                Digital Currency Exchanged
                </p>
            </div>
        </div>)}
    </div>
  )
}

export default Stats