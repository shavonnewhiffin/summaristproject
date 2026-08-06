import React from 'react'
import Landing from '../Landing'
import Features from '../Features'
import Statistics from '../Statistics'
import Reviews from '../Reviews'
import Numbers from '../Numbers'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Landing />
      <Features />
      <Statistics />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  );
}
