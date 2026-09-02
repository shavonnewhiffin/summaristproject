"use client"

import React from 'react'
import Laptop from "../../assets/login.png";
import Image from "next/image";
import styles from "../../styles/dashboard/Settings.module.css";

export default function LoginPrompt() {
  return (
       <div className="container">
      <div className="row">
        <div className={styles['login__prompt']}>
          <figure className={styles['login__img--wrapper']}>
            <Image src={Laptop} alt="Login"/>
          </figure>
          <div className={styles['login__text']}>Login to your account to see your  details.</div>
          <button className={`btn ${styles['login__btn']}`}>Login</button>
        </div>
      </div>
    </div>
  )
}
