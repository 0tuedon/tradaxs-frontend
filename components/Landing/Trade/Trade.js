import React from 'react'
import { CryptoCardData } from '../../../data/tradaxs'
import CryptoCard from './CryptoCard'

const Trade = () => {
  return (
    <div className='bg-white 
    md:px-[100px]
   px-[10px]

    flex flex-col'>
        {/* Heading for trade */}
        <h2 className='md:text-center self-center
        font-bold
        text-landingBlue 
      text-[25px]
      mt-[10px]
        md:text-[40px]
        md:w-[741px]
        '>
        Trade securely and market the high growth cryptocurrencies.
        </h2>
        {/* Bitcoin etherum and others */}
        <div className='flex flex-col md:flex-row 
        gap-y-[20px]
        items-center
        md:gap-x-[48px] mt-[64px]'>
            {CryptoCardData.map(data=>
                 <CryptoCard key={data.name} data={data} bg={data.bg}/>
                )}
           
        </div>
    </div>
  )
}

export default Trade