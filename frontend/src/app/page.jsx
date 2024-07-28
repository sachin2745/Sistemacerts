"use client";
import React, { useEffect, useState } from 'react'
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
import Preloader from './(main)/Preloader/page';

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

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