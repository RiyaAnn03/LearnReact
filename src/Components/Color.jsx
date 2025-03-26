import React, { useState } from 'react'

const Color = () => {
    const [color,setColor]=useState(true)
  return (
    <>
     <div className={`w-20 h-60 border ${color?`bg-amber-300`:`bg-blue-800`}`}></div>
      <button onClick={()=>setColor(!color)} className='border'>colorChange</button>

      
    </>
  )
}

export default Color

