import React from 'react'
import Header from './(main)/Header/page'
import Footer from './(main)/Footer/page'
import CallToAction from './(main)/Calltoaction/page'
import Stats from './(main)/Stats/page'

const page = () => {
  return (
    <>
      <Header />
      <Stats />
      <CallToAction />
      <Footer />
    </>

  )
}

export default page