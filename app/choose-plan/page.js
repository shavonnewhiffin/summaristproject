import React from "react";
import { initFirebase } from "../src/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
