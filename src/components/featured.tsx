import React from 'react'

const featured = () => {
  return (
    <div>
        <h5 className='mt-24 mb-8 font-bold'>Featured</h5>
        <img src="image-4.png" alt="" />
        <h1 className='font-bold text-center text-4xl mt-8'>STEP INTO WHAT FEELS GOOD</h1>
        <p className='text-center mt-4'>
           Cause everyone should know the feeling of running in that perfecr pair.  
        </p>
        <div className='flex justify-center mt-4'>
        <button className='bg-black text-white rounded-full px-4 py-2 mr-4'>Find Your shoe</button>
        </div>
    </div>
  )
}

export default featured