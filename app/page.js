import React from 'react'
import Landing from './components/Landing'
import Features from './components/Features'
import Statistics from './components/Statistics';
import Reviews from './components/Reviews'
import Numbers from './components/Numbers';

export default function Home() {
  return (
    <>
      <Landing />
      <Features />
      <Statistics />
      <Reviews />
      <Numbers />
    </>
  );
}
