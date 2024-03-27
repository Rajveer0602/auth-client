import React from 'react'
import { FaPlay, FaSearch } from "react-icons/fa"
import header from '../assets/banner.png'

const Header = () => {
    return (
        <div className="py-3 px-10 sm:px-4 md: px-6 1g:px-6">
            <div className="container mx-auto py-[16vh]">
                <div className="grid grid-cols-1 relative 1g:grid-cols-2 gap-8 items-center">
                    <div className="lg:w-[32rem] w-full flex flex-col space-y-6">
                        <div className="text-4xl md:text-5xl font-bold text-[#2e2e2e] lg:text-6xl">
                            we are <span className="text-[#f54748]">
                                Serious
                            </span>For <span className="text-[#f54748]">Food</span> & <span className="text-[#Fdc55e]">Delievery</span>
                        </div>
                        <div className="lg: text-xl text-[#191919] md:text-lg text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorum assumenda quam nam possimus doloribus laborum temporibus natus voluptate nihil deserunt eum tempore placeat, dicta.
                        </div>
                        <div className="flex rounded-full py-2 px-4 justify-beetween items-center bg-white shadow-md">
                            <div className="flex items-center">
                                <FaSearch size={22} className=' cursor-pointer'/>
                                <input type="text" placeholder='Search food here ...' className="text-[#191919] w-full border-none outline-none py-2 px-4"/>              
                            </div>

                            <div className="h-10 w-10 relative bg-[#fdc55e] rounded-full">
                                <FaSearch size={15} className='cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '/>  {/*34.08 */}
                            </div>
                        </div>
                        <div className="flex gap-8 items-center">
                            <button className="bg-[#f54748] active:scale-90 transition duration-500 transform
                             hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
                                explore now
                             </button>

                             <div className="sm:flex hidden gap-4 items-center">
                                <div className="h-14 w-14 shadow-md cursor-pointer relative bg-white rounded-full">
                                    <FaPlay size={18} className='cursor-pointer text-[#f54748] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                                </div>
                                <div className="lg:text-xl text-[#191919] md:text-lg text-base cursor-pointer">
                                    Watch Now
                                </div>
                             </div>
                        </div>

                    </div>
                    <img src={header} className=' h-[28rem] mx-auto justify-end' alt="" /> {/* 39.12*/}
                </div>
            </div>
        </div>

    )
}

export default Header