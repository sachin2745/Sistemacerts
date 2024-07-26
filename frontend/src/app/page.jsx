"use client";
import React from 'react'
import Header from './(main)/Header/page'
import Footer from './(main)/Footer/page'
import CallToAction from './(main)/Calltoaction/page'
import Stats from './(main)/Stats/page'
import WhyChooseUs from './(main)/Whychooseus/page'
import Iso from './(main)/Iso/page'
import About from './(main)/About/page'
import Services from './(main)/Services/page'
import Hero from './(main)/Hero/page'
import Certification from './(main)/Certification/page'

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Certification />
      <Iso />
      <WhyChooseUs />
      <Stats />
      <CallToAction />
      <Footer />
    </>

  )
}

export default page