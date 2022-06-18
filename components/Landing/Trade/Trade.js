import React from 'react'
import { CryptoCardData } from '../../../data/tradaxs'
import CryptoCard from './CryptoCard'

const Trade = () => {
  return (
    <div className='bg-white 
    px-[100px]
   
    flex flex-col'>
        {/* Heading for trade */}
        <h2 className='text-center self-center
        font-bold
        text-landingBlue text-[40px]
        w-[741px]
        '>
        Trade securely and market the high growth cryptocurrencies.
        </h2>
        {/* Bitcoin etherum and others */}
        <div className='flex gap-x-[48px] mt-[64px]'>
            {CryptoCardData.map(data=>
                 <CryptoCard key={data.name} bg={'bg-landingBlue'}/>
                )}
           
        </div>
    </div>
  )
}

export default Trade