"use client";
import React from 'react'
import classes from './calltoaction.module.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const CallToAction = () => {

    const [typeEffect] = useTypewriter({
        words: ['An Excellent Certification And Inspections Services ??', 'An Excellent Certification And Inspections Services ??', 'An Excellent Certification And Inspections Services ??'],
        loop: {},
        typeSpeed: 100,
        delaySpeed: 80
    })

    return (
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl lg:border-s-8 border-tri pl-3 font-extrabold tracking-tight text-neutral-900 sm:text-4xl font-Montserrat">
                <span className="block">Looking For</span>
                <span className="hidden md:block bg-tri bg-clip-text text-transparent  ">
                    {typeEffect}
                </span>
                <span className="block bg-tri bg-clip-text text-transparent md:hidden">
                    An Excellent Certification And Inspections Services ?
                </span>
            </h2>
            <div className="mt-6 font-Lato space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                <a
                    href="/contact"
                    className={classes.button}                >
                    Contact Us
                </a>
            </div>
        </div>

    )
}

export default CallToAction