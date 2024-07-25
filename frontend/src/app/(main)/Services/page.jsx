"use client";
import React from 'react'

const Services = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-0">
                {/* text - start */}
                <div className="mb-10 md:mb-16 font-Montserrat">
                    <p className="mx-auto max-w-screen-md text-tri text-center font-semibold text-xl uppercase ">
                        Our Services
                    </p>
                    <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-800 md:mb-6 lg:text-3xl">

                        Inspiring Businesses
                    </h2>
                </div>
                {/* text - end */}
                <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8">
                    {/* article - start */}
                    <a
                        href="#"
                        className="group relative flex h-56 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                    >
                        <img
                            src="service1.jpg"
                            loading="lazy"
                            alt="Photo by Minh Pham"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
                        <div className="relative mt-auto p-3 text-balance">
                            <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                                Auditing
                            </h2>
                            <h3 className="font-semibold text-sm text-white group-hover:text-tri  ">Learn more..</h3>
                        </div>
                    </a>
                    {/* article - end */}
                    {/* article - start */}
                    <a
                        href="#"
                        className="group relative flex h-56 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                    >
                        <img
                            src="service2.jpg"
                            loading="lazy"
                            alt="Photo by Lorenzo Herrera"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
                        <div className="relative mt-auto p-4">
                            <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                                Certifications
                            </h2>
                            <span className="font-semibold text-sm text-white group-hover:text-tri">Learn more..</span>
                        </div>
                    </a>
                    {/* article - end */}
                    {/* article - start */}
                    <a
                        href="#"
                        className="group relative flex h-56 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                    >
                        <img
                            src="service3.jpg"
                            loading="lazy"
                            alt="Photo by Magicle"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
                        <div className="relative mt-auto p-4">
                            <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                                Product Testing
                            </h2>
                            <span className="font-semibold text-sm text-white group-hover:text-tri">Learn more..</span>
                        </div>
                    </a>
                    {/* article - end */}
                    {/* article - start */}
                    <a
                        href="#"
                        className="group relative flex h-56 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
                    >
                        <img
                            src="service4.jpg"
                            loading="lazy"
                            alt="Photo by Martin Sanchez"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
                        <div className="relative mt-auto p-4">
                            <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                                Training
                            </h2>
                            <span className="font-semibold text-sm text-white group-hover:text-tri">Learn more..</span>
                        </div>
                    </a>
                    {/* article - end */}
                </div>
            </div>
        </div>

    )
}

export default Services