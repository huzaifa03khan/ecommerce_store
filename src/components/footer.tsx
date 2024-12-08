import React from 'react'

const footer = () => {
  return (
    <div>
        <footer className="bg-black text-gray-400 text-sm py-6">
        <div className="container mx-auto px-6 flex justify-between">
            <div>
                <ul>
                    <li><a href="#" className="hover:underline">Find a Store</a></li>
                    <li><a href="#" className="hover:underline">Become a Member</a></li>
                    <li><a href="#" className="hover:underline">Sign Up for Email</a></li>
                    <li><a href="#" className="hover:underline">Send Us Feedback</a></li>
                    <li><a href="#" className="hover:underline">Student Discounts</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="#" className="hover:underline">Order Status</a></li>
                    <li><a href="#" className="hover:underline">Delivery</a></li>
                    <li><a href="#" className="hover:underline">Returns</a></li>
                    <li><a href="#" className="hover:underline">Payment Options</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="#" className="hover:underline">News</a></li>
                    <li><a href="#" className="hover:underline">Careers</a></li>
                    <li><a href="#" className="hover:underline">Investors</a></li>
                    <li><a href="#" className="hover:underline">Sustainability</a></li>
                </ul>
            </div>
        </div>
        <div className="text-center mt-6">
            <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
    </footer>
    </div>
  )
}

export default footer