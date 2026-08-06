import React from 'react'
import styles from '../styles/home/Navbar.module.css'
import Image from "next/image"

export default function Navbar() {
    return (
    <nav className={styles.nav}>
      <div className={`row ${styles.nav__wrapper}`}>
        <figure className={styles['nav__img--mask']}>
          <img className={styles.nav__img} src="/images/logo.png" alt="logo" />
        </figure>
        <ul className={styles['nav__list--wrapper']}>
          <li className={`${styles.nav__list} ${styles['nav__list--login']}`}>Login</li>
          <li className={`${styles.nav__list} ${styles['nav__list--mobile']}`}>About</li>
          <li className={`${styles.nav__list} ${styles['nav__list--mobile']}`}>Contact</li>
          <li className={`${styles.nav__list} ${styles['nav__list--mobile']}`}>Help</li>
        </ul>
      </div>
    </nav>
  )
}
