"use client"
import { useState } from "react"
import LoginModal from "./LoginModal"
import RegisterModal from "./RegisterModal"
import styles from "../styles/home/Landing.module.css"
import Image from "next/image"
import landingImg from "../assets/landingsmall.png"

export default function Landing() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setisRegisterOpen] = useState(false);

    return (
       <section className={styles.landing}>
      <div className="container container--first">
        <div className="row">
          <div className={styles.landing__wrapper}>
            <div className={styles.landing__content}>
              <div className={styles.landing__content__title}>
                Gain more knowledge <br className={styles['remove--tablet']} />
                in less time
              </div>
              <div className={styles.landing__content__subtitle}>
                Great summaries for busy people,
                <br className={styles['remove--tablet']} />
                individuals who barely have time to read,
                <br className={styles['remove--tablet']} />
                and even people who don’t like to read.
              </div>
              <button className={`${styles.btn} ${styles['home__cta--btn']}`} onClick={() => setIsLoginOpen(true)}>Login</button>
              {isLoginOpen && (
               <LoginModal
  onClose={() => setIsLoginOpen(false)}
  onRegister={() => {
    setIsLoginOpen(false);
    setisRegisterOpen(true);
  }}
/>
              )}
              {isRegisterOpen && (
                <RegisterModal
                  onClose={() => setisRegisterOpen(false)}
                  onLogin={() => {
                    setisRegisterOpen(false);
                    setIsLoginOpen(true);
                  }}
                />
              )}
            </div>
            <figure className={styles['landing__image--mask']}>
              <Image src={landingImg} alt="landing" width="779" height="740" loading="lazy" />
            </figure>
          </div>
        </div>
      </div>
    </section>
    )
}