"use client";
import { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { auth, provider } from '../src/firebase';
import { AuthContext } from '../src/context/auth-context'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { IoMdClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import styles from '../styles/home/Modals.module.css'
import Image from 'next/image'
import google from '../.././public/images/google.png'


export default function LoginModal({ onClose, onRegister }) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingGoogle, setLoadingGoogle] = useState(false)
    const [loadingGuest, setLoadingGuest] = useState(false)
    const [authError, setAuthError] = useState(null);

    const router = useRouter();
    const user = useContext(AuthContext);

    function login() {
        setLoading(true);
        setAuthError(null);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log(result.user)
            setUser(result.user)
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

    function googleLogin() {
        setLoadingGoogle(true)
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user)
            onClose();
            router.push('/for-you');
        })
        .catch((error) => {
            console.log(error);
            setLoadingGuest(false);
            setAuthError(error.message);
        })
    }

    function loginAsGuest(){
          setLoadingGuest(true)  
          signInWithEmailAndPassword(auth, 'guest@gmail.com', 'guest123')
                .then((result) => {
            console.log(result.user)
            setUser(result.user)
            onClose();
            router.push('/for-you');
        })
        .catch((error) => {
            console.log(error);
            setAuthError(error.message);
            setLoading(false);
        })
    }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles['modal__content']}>
          <div className={styles['modal__title']}>Login to Summarist</div>
          {authError && <div className={styles['auth__error']}>{authError}</div>}
          <button className={`btn ${styles.btn} ${styles['guest__btn--wrapper']}`} onClick={(() => {loginAsGuest()})}>
            <figure className={`${styles['google__icon--mask']} ${styles['guest__icon--mask']}`}>
              <FaUser />
            </figure>
            <div className="">{loadingGuest ? (<ImSpinner8 className="spinner" />) : ('Login as a Guest')}</div>
          </button>
          <div className={styles['modal__seperator']}>
            <span className={styles['modal__seperator--text']}>or</span>
          </div>
          <button className={`btn ${styles.btn} ${styles['google__btn--wrapper']}`} onClick={() => {googleLogin()}}>
            <figure className={styles['google__icon--mask']}>
              <Image src={google} alt="" />
            </figure>
            <div className="" >{loadingGoogle ? (<ImSpinner8 className="spinner" />) : ('Login with Google')}</div>
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
              {loading ? (<ImSpinner8 className="spinner" />) : (<span>Login</span>)}
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
