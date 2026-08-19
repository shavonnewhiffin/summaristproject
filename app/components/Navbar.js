"use client"
import { useState } from 'react'
import styles from '../styles/home/Navbar.module.css'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import Image from "next/image"

export default function Navbar() {

  const [isLogin, setLogin] = useState(false);
  const [isRegister, setRegister] = useState(false);

    return (
    <nav className={styles.nav}>
      <div className={`row ${styles.nav__wrapper}`}>
        <figure className={styles['nav__img--mask']}>
          <img className={styles.nav__img} src="/images/logo.png" alt="logo" />
        </figure>
        <ul className={styles['nav__list--wrapper']}>
          <li className={`${styles.nav__list} ${styles['nav__list--login']}`} onClick={() => setLogin(true)}>Login</li>
          <li className={`${styles.nav__list} ${styles['nav__list--mobile']}`}>About</li>
          <li className={`${styles.nav__list} ${styles['nav__list--mobile']}`}>Contact</li>
          <li className={`${styles.nav__list} ${styles['nav__list--mobile']}`}>Help</li>
        </ul>
      </div>
      <div>
      {isLogin && (
                <LoginModal
                  onClose={() => setLogin(false)}
                  onRegister={() => {
                    setLogin(false);
                    setRegister(true);
                  }}
                />
              )}
              {isRegister && (
                <RegisterModal
                  onClose={() => setRegister(false)}
                  onLogin={() => {
                    setRegister(false);
                    setLogin(true);
                  }}
                />
              )}
              </div>
    </nav>
  )
}
