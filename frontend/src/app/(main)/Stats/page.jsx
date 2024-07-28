"use client"
import React from 'react'
import { useCountUp } from 'react-countup';

const Stats = () => {

    useCountUp({
        ref: 'counter',
        end: 45,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,

    });

    useCountUp({
        ref: 'counter2',
        end: 1750,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,

    });

    useCountUp({
        ref: 'counter3',
        end: 100,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,

    });

    useCountUp({
        ref: 'counter4',
        end: 1250,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,

    });

    return (
        <section className="flex flex-col mt-20 mb-10 p-5 sm:p-0">
            <p className="font-semibold text-tri text-xl md:text-3xl text-center uppercase font-Montserrat">
                QUALITY SISTEMA

            </p>
            <p className="font-extrabold text-pri text-2xl md:text-4xl text-center font-Montserrat">
                Experience the Excellency

            </p>
            <span className='block bg-tri w-56 h-1 mx-auto mt-3 mb-4'></span>
            <p className="font-semibold text-2xl text-pri md:text-2xl text-balance text-center mb-1 font-Montserrat">
                Looking For An Excellent Certification And Inspections Services ?

            </p>
            <p className="font-medium text-lg text-pri md:text-xl  text-center max-w-5xl mx-auto font-Montserrat">
                Feel free to contact Us anytime. We are available 24×7 to assure you of the best possible Certification and Inspections Services.

            </p>
            <div className="font-Kanit mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">
                <div className="flex flex-col justify-center group cursor-pointer items-center bg-sec px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                    <div className="flex flex-row justify-center items-center">
                       
                        <img src="medal.png" className="group-hover:animate-bounce w-[35px] h-[35px] md:w-[50px] md:h-[50px]" alt="certificates" />
                       
                        <div className="App font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-white ml-2 ">
                            <span id="counter2" />+
                        </div>
                    </div>
                    <p className="font-medium text-base sm:text-xl leading-6 mt-3 md:mt-6 text-center text-white">
                        Certificates
                    </p>
                </div>
                <div className="flex flex-col justify-center group cursor-pointer items-center bg-sec px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                    <div className="flex flex-row justify-center items-center">
                       
                        <img src="auditor.png" className="group-hover:animate-bounce w-[35px] h-[35px] md:w-[50px] md:h-[50px]" alt="auditor" />
                      
                         <div className="App font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-white ml-2 ">
                            <span id="counter3" />+
                        </div>
                    </div>
                    <p className="font-medium text-base sm:text-xl leading-6 mt-3 md:mt-6 text-center text-white">
                        Auditors
                    </p>
                </div>
                <div className="flex flex-col justify-center group cursor-pointer items-center bg-sec px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center ">
                    <div className="flex flex-row justify-center items-center">
                        
                        <img src="planet-earth.png" className="group-hover:animate-bounce w-[35px] h-[35px] md:w-[50px] md:h-[50px]" alt="country" />
                       
                        <div className="App font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-white ml-2">
                            <span id="counter" />+
                        </div>
                    </div>
                    <p className="font-medium text-base sm:text-xl leading-6 mt-3 md:mt-6 text-center text-white">
                        Country Support
                    </p>
                </div>
                <div className="flex flex-col justify-center group cursor-pointer items-center bg-sec px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                    <div className="flex flex-row justify-center items-center">
                       
                        <img src="costumer.png" className="group-hover:animate-bounce w-[35px] h-[35px] md:w-[50px] md:h-[50px]" alt="clients" />
                        
                         <div className="App font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-white ml-2 ">
                            <span id="counter4" />+
                        </div>
                    </div>
                    <p className="font-medium text-base sm:text-xl leading-6 mt-3 md:mt-6 text-center text-white">
                        Happy Clients
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Stats