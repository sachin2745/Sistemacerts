import React from 'react'

const About = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-full lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full ">
                            <img
                                alt=""
                                src="img1.jpg"
                                className="absolute inset-0 h-96 w-full overflow-hidden  object-cover hover:scale-90 duration-300 transition ease-in-out delay-150"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-100 mt-16 lg:mt-0 py-16 font-Montserrat">
                        <span
                            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-16">
                            <h3 className="text-2xl font-semibold md:-mt-6 text-tri tracking-wider sm:text-xl uppercase">

                                It Works Perfectly With
                            </h3>
                            <h2 className="text-4xl font-extrabold sm:text-3xl mt-3">

                                Think Innovative: Standard Approach
                            </h2>
                            <span className='block bg-tri w-56 h-1  mt-5 mb-6'></span>

                            <p className="mt-10 text-gray-600 font-medium ">
                            &ldquo;Quality Sistema Certifications & Inspections Pvt. Ltd. is one of the leading Global Organization, providing ISO Certifications, Inspection, Assurance & Auditing Services for industries with competence and transparency to build trust across the global industries. We are a team of highly specialized experts and industry professionals who working towards a sustainable business growth.&rdquo;
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About