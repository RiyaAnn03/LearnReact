import React from 'react'
import CustCard from './CustCard'

const Customer = () => {
  return (
    <>
      <div className='w-full h-[500px] mt-5   left-14 rounded-2xl border-1 bg-[#F9FBFC]'>
        <div className='w-[400px] h-[40px] mt-1.5 ml-[220px] font-semibold text-[20px] leading-[40px] tracking-[0] flex items-center '>What our customers say</div>
    <div className='max-w-[1000px] w-full h-96  mt-10  mx-auto flex'>
        <CustCard/>
        <CustCard/>
        <CustCard/>
    </div>

      </div>
    </>
  )
}

export default Customer
