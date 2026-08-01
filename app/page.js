import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Features from './components/Features'
import Statistics from './components/Statistics';
import Reviews from './components/Reviews'

export default function Home() {
  return (
    <><Navbar />
      <Landing />
      <Features />
      <Statistics />
      <Reviews />
    </>
  );
}
