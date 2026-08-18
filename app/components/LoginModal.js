"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '../src/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { IoMdClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import styles from '../styles/home/Modals.module.css'
import Image from 'next/image'
import google from '../.././public/images/google.png'

export default function LoginModal({ onClose, onRegister }) {

    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [authError, setAuthError] = useState(null);

    const router = useRouter();

    function login() {
        setLoading(true);
        setAuthError(null);
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user)
            setUser(user)
            onClose();
            router.push('/for-you');
        })
        .catch((error) => {
            console.log(error);
            setAuthError(error.message);
            setLoading(false);
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        login();
    }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles['modal__content']}>
          <div className={styles['modal__title']}>Login to Summarist</div>
          {authError && <div className="auth__error">{authError}</div>}
          <button className={`btn ${styles.btn} ${styles['guest__btn--wrapper']}`}>
            <figure className={`${styles['google__icon--mask']} ${styles['guest__icon--mask']}`}>
              <FaUser />
            </figure>
            <div className="">Login as a Guest</div>
          </button>
          <div className={styles['modal__seperator']}>
            <span className={styles['modal__seperator--text']}>or</span>
          </div>
          <button className={`btn ${styles.btn} ${styles['google__btn--wrapper']}`} onClick ={() => login()}>
            <figure className={styles['google__icon--mask']}>
              <Image src={google} alt="" />
            </figure>
            <div className="">Login with Google</div>
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
              {loading ? (<FaSpinner className="spinner" />) : (<span>Login</span>)}
            </button>
          </form>
          <div className={styles['modal__forgot--password']}>Forgot your password?</div>
        </div>
        <div className={styles['modal__switch--btn']} onClick={onRegister}>Dont have an account?</div>
        <div className={styles['modal__close--btn']}>
          <IoMdClose onClick={onClose} />
        </div>
      </div>
    </div>
  );
}
