import React from 'react'

const hero = () => {
  return (
    <div >
        <h3 className= "font-bold text-center">Hello Nike App</h3>
        <h5 className='text-center'>Download the App to access Everything Nike. <span className='underline font-bold'><a href="#">Get Your Great</a></span></h5>
        <img src="image.png" alt="" className='mt-4' />
        <h5 className='text-center mt-4' >First Look</h5>
        <h1 className='font-bold text-center text-6xl'>NIKE AIR MAX PULSE</h1>
        <p className='text-center mt-4'>
           Extreme Comfort. Hyper Durable. Max Volume. Introducing the Air Max Pulse <br />
           designed to push you Past Your Limits and help you go to max.  
        </p>
        <div className='flex justify-center mt-4'>
        <button className='bg-black text-white rounded-full px-4 py-2 mr-4'>Notify Me</button>
        <button className='bg-black text-white rounded-full px-4 py-2' >Shop Air Max</button>
        </div>
    </div>
  )
}

export default hero