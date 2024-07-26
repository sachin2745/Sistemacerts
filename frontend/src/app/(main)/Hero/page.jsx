import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Hero = () => {
    return (
        <div className=" lg:flex  ">
            <img
                src="img2.jpg"
                alt="Leafs"
                className="w-full h-[500px]  md:h-[700px] block lg:hidden object-cover sm:h-screen sm:w-4/12"
            />
            <div className="w-full sm:w-8/12 mb-10 mt-3">
                <div className="container mx-auto h-full sm:p-10">
                    <nav className="flex px-4 justify-between items-center">
                        <div className="text-md font-bold uppercase font-Montserrat">
                        Quality Sistema <span className='text-sec'>Certifications and Inspections</span>
                        </div>
                        <div>
                            <img
                                src="https://image.flaticon.com/icons/svg/497/497348.svg"
                                alt=""
                                className="w-8"
                            />
                        </div>
                    </nav>
                    <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0 font-Montserrat">
                        <div className="w-full">
                            <h1 className="text-4xl lg:text-6xl font-extrabold ">
                            Premium <span className='text-tri'>Quality</span> Services
                            </h1>
                            <div className="w-20 h-2 bg-tri my-4" />
                            <p className="text-xl mb-10">
                            Quality Sistema Certs is one of the Leading Global Certification Organization, Providing ISO Certification & Audit in India as well as Abroad having a competent Auditor Team.
                            </p>
                            <button className="bg-tri flex gap-x-2 text-white text-xl font-medium px-4 py-2 rounded shadow">
                                Learn More<MdOutlineKeyboardDoubleArrowRight className='mt-1 ' />
                            </button>
                        </div>
                    </header>
                </div>
            </div>
            <img
                src="img2.jpg"
                alt="Leafs"
                className="w-full h-[500px]  md:h-[700px]   hidden lg:block object-cover  sm:w-4/12"
            />
        </div>


    )
}

export default Hero