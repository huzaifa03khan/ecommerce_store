import React from 'react'

const navbar = () => {
  return (
    <div>
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
        <div className="flex items-center">
            <svg className="h-8 w-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="..."></path></svg>
        </div>
        <nav>
            <div className="flex items-center space-x-4 text-gray-600 ">
            <a href="#" className="hover:text-black font-bold">Find a Store <span className='font-bold'> | </span></a>
            <a href="#" className="hover:text-black font-bold" >Help<span className='font-bold'> | </span></a>
            <a href="#" className="hover:text-black font-bold">Join Us<span className='font-bold'> | </span></a>
            <a href="#" className="hover:text-black font-bold">Sign In<span className='font-bold'> | </span></a>
            </div>
        </nav>
    </header>

    <header className="flex items-center justify-center px-6 py-4 border-b border-gray-300">
        <div className="flex items-center">
            <svg className="h-8 w-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="..."></path></svg>
        </div>
        <nav className="flex items-center space-x-6 text-gray-600">
            <a href="#" className="hover:text-black font-bold">New & Featured</a>
            <a href="#" className="hover:text-black font-bold">Men</a>
            <a href="#" className="hover:text-black font-bold">Women</a>
            <a href="#" className="hover:text-black font-bold">Kids</a>
            <a href="#" className="hover:text-black font-bold">Sale</a>
            <a href="#" className="hover:text-black font-bold">SNKRS</a>
        </nav>
            <div className="flex overflow-hidden flex-col items-start px-16 max-w-[279px]">
                <div className="flex gap-4 items-center">
                  <form className="flex flex-col items-start self-stretch pb-1.5 my-auto w-[118px]">
                    <div className="flex gap-2 py-0.5 mr-0 w-full bg-neutral-100 rounded-[100px]">
                      <div className="flex overflow-hidden items-start px-2 py-1.5 rotate-[3.141592653589793rad] rounded-[100px]">
                      </div>
                      <label htmlFor="searchInput" className="sr-only">Search</label>
                      <input type="search" id="searchInput" className="grow shrink my-auto text-base font-medium text-stone-300 w-[219px] bg-transparent border-none focus:outline-none" placeholder="Search" aria-label="Search" />
                    </div>
                  </form>
                  <div className="flex gap-3 items-start self-stretch pt-0.5 pb-6 my-auto min-h-[70px] w-[84px]">
                    <div className="flex gap-3 justify-between items-center w-[84px]">
                      <button className="flex overflow-hidden items-start self-stretch p-1.5 my-auto w-9 rounded-[100px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Notification">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f15ab536bb125ec54ddb8096c2aa3803fa0722549a4c71a8e48ef75ee1fd413b?placeholderIfAbsent=true&apiKey=bc1a4ad9cfba4dacb76e8cf0c6955c57" className="object-contain w-6 aspect-square" alt="Notification bell icon" />
                      </button>
                      <button className="flex overflow-hidden items-start self-stretch p-1.5 my-auto w-9 rounded-[100px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Settings">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/53e5d85c9c7ee5116e8055b39faa348cd7238351ca471265760e490fc6f2f9ff?placeholderIfAbsent=true&apiKey=bc1a4ad9cfba4dacb76e8cf0c6955c57" className="object-contain w-6 aspect-square" alt="Settings gear icon" />
                      </button>
                    </div>
                  </div>
                </div>
        </div>
    </header>
    </div>
  )
}

export default navbar