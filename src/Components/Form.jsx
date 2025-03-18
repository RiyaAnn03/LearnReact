import React from 'react'

const Form = () => {
  return (
    <>
    <div className='border w-[500px] h-[500px] mt-5 '>
        
        <form action="">
        <div className="space-y-4 m-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
           
            className="w-full border-b-2 border-gray-300 py-2"/>
           
            <input
            type="password"
            name="password"
            placeholder="Password"
           
            className="w-full border-b-2 border-gray-300  py-2"/>
             <input
            type="password"
            name="password"
            placeholder=" Confirm Password"
           
            className="w-full border-b-2 border-gray-300  py-2"/>
           <div className='flex text-gray-500  space-x-4'>
            <label className=''>Designation:  </label>
            <select name="" id="" className='border'>
                <option value=""></option>
                <option value="">Softwore Engineer</option>
                <option value="">Doctor</option>
                <option value="">Police</option>
                <option value="">Agricultural Officer</option>
              </select>
           </div>


            <div className='flex gap-2'>
            <input
            type="text"
            name="text"
            placeholder=" First Name"
           
            className="w-full border-b-2 border-gray-300  py-2"/>
             <input
            type="text"
            name="text"
            placeholder=" Last Name"
           
            className="w-full border-b-2 border-gray-300  py-2"/>
            </div>
            <div className='flex gap-2'>
            <input
            type="phone"
            name="phone"
            placeholder=" Phone Number (1234567)"
           
            className="w-full border-b-2 border-gray-300  py-2"/>
             <input
            type="text"
            name="text"
            placeholder=" Company (xyz)"
           
            className="w-full border-b-2 border-gray-300  py-2"/>
            </div>
             </div>
        </form>

<div className='flex justify-items-start m-4'>  <button className='bg-blue-700 text-amber-50 p-2 rounded-2xl'>Submit</button></div>   
 </div>
      
    </>
  )
}

export default Form
