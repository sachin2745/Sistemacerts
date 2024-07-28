"use client";
import Image from 'next/image';
import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Hero = () => {
    return (
        <div className=" lg:flex  ">
            <Image
                src="/img2.avif"
                width={500}
                height={500}    
                alt="Hero"
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
                            {/* <button className="bg-tri flex gap-x-2 text-white text-xl font-medium px-4 py-2 rounded shadow">
                                Learn More<MdOutlineKeyboardDoubleArrowRight className='mt-1 ' />
                            </button> */}
                            <button
                                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-tri rounded-md group"
                            >
                                <span
                                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-tri rounded group-hover:-mr-4 group-hover:-mt-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-tri rounded group-hover:-ml-4 group-hover:-mb-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-tri rounded-md group-hover:translate-x-0"
                                ></span>
                                <span
                                    className="relative flex w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                > Learn More<MdOutlineKeyboardDoubleArrowRight className='mt-1 ' /></span
                                >
                            </button>

                        </div>
                    </header>
                </div>
            </div>
            <img
                src="img2.avif"
                alt="Leafs"
                className="w-full h-[500px]  md:h-[700px]   hidden lg:block object-cover  sm:w-4/12"
            />
        </div>


    )
}

export default Hero