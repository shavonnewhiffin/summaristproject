import React from "react";
import Hero from "../components/chooseplan/Hero";
import Plans from "../components/chooseplan/Plans";
import Accordion from "../components/chooseplan/Accordion";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Hero />
      <Plans />
      <Accordion />
      <Footer />
      
    </>
  );
};

export default page;
