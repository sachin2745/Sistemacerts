import React from 'react'
import Header from './(main)/Header/page'
import Footer from './(main)/Footer/page'
import CallToAction from './(main)/Calltoaction/page'
import Stats from './(main)/Stats/page'
import WhyChooseUs from './(main)/Whychooseus/page'
import Iso from './(main)/Iso/page'
import About from './(main)/About/page'

const page = () => {
  return (
    <>
      <Header />
      <About />
      <Iso />
      <WhyChooseUs />
      <Stats />
      <CallToAction />
      <Footer />
    </>

  )
}

export default page