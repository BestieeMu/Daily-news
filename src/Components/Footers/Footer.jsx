import React from 'react'

function Footer() {
  return (
    <>
    <div className='w-full flex justify-center h-72 bg-red-500'>

<div className='w-10/12'>
   
<div className='text-white w-full flex flex-col gap-10 items-center mt-14'>
  <h3 className='text-3xl'>Sign in for news letter</h3>

  <div className='w-6/12 flex  gap-3'>
    <input type="email" 
  required
  placeholder='Email Address'
  className='w-11/12 rounded h-10 px-2'
  />
  <button className='w-32 bg-white text-red-500 rounded-md'>Join Now</button>
  </div> 
</div>

</div>

    </div>
    </>
  )
}

export default Footer