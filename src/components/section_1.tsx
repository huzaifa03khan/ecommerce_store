import React from 'react'

const Air_Max = () => {
  return (
    <div>
  <div className="flex gap-5 max-md:flex-col">
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="image-0.png"
        alt="Gallery image 1"
        className="object-contain grow w-full aspect-[0.87] max-md:mt-3 max-md:max-w-full"
      />
        <div className="flex justify-between items-center">
            <h5 className="text-lg font-bold">Nike Air Max Pulse</h5>
            <h5 className="text-lg font-bold">&#8377; 13995</h5>
        </div>
    </div>
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="image-1.png"
        alt="Gallery image 2"
        className="object-contain grow w-full aspect-[0.87] max-md:mt-3 max-md:max-w-full"
      />
      <div className="flex justify-between items-center">
            <h5 className="text-lg font-bold">Nike Air Max Pulse</h5>
            <h5 className="text-lg font-bold">&#8377; 13995</h5>
        </div>
    </div>
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="image-2.png"
        alt="Gallery image 3"
        className="object-contain grow w-full aspect-[0.87] max-md:mt-3 max-md:max-w-full"
      />
      <div className="flex justify-between items-center">
            <h5 className="text-lg font-bold">Nike Air Max Pulse</h5>
            <h5 className="text-lg font-bold">&#8377; 13995</h5>
        </div>
    </div>
  </div>
</div>
  )
}

export default Air_Max