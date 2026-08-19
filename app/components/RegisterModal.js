"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth, provider } from '../src/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";
import styles from '../styles/home/Modals.module.css'
import Image from 'next/image'
import google from '../.././public/images/google.png'

const RegisterModal = ({ onClose, onLogin }) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setAuthError] = useState(null);
    const [googleLoading, setGoogleLoading] = useState(false);

    const router = useRouter();

       function register() {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user);
            setUser(user)
            onClose();
            router.push('/for-you');
         
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
            setAuthError(error.message);
        })

    }
       function handleSubmit(e) {
        e.preventDefault();
        register();
    }

    function googleRegister(){
        setGoogleLoading(true);
        signInWithPopup(auth, provider)
        .then((user) => {
            console.log(user);
            setUser(user);
            setGoogleLoading(false);
            router.push('/for-you');
        })
        .catch((error) => {
            console.log(error);
            setGoogleLoading(false);
            setAuthError(error.message)
        })
    }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles['modal__content']}>
          <div className={styles['modal__title']}>Sign Up with Summarist</div>
          {error && <div className={styles['auth__error']}>{error}</div>}
          <button className={`btn ${styles.btn} ${styles['google__btn--wrapper']}`} onClick={() => googleRegister()}>
            <figure className={styles['google__icon--mask']}>
              <Image src={google} alt="" />
            </figure>
            <div className="">{googleLoading ? (<FaSpinner />):('Register with Google')}</div>
          </button>
          <div className={styles['modal__seperator']}>
            <span className={styles['modal__seperator--text']}>or</span>
          </div>
          <form className={styles['modal__main--form']} onSubmit={handleSubmit}>
            <input
              className={styles['modal__main--input']}
              type="text"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles['modal__main--input']}
              type="password"
              placeholder="Password"
              onChange = {(e) => setPassword(e.target.value) }
            />
            <button className="btn">
              {loading ? (<FaSpinner  className="spinner"/>) : (<span>Register</span>)}
            </button>
          </form>
        </div>
        <div className={styles['modal__switch--btn']} onClick={onLogin}>Already have an account?</div>
        <div className={styles['modal__close--btn']}>
          <IoMdClose onClick={onClose} />
        </div>
      </div>
    </div>
  )
}

export default RegisterModal