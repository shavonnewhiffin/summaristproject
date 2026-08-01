import styles from "../styles/Landing.module.css"
import Image from "next/image"
import landingImg from "../assets/landing.png"

export default function Landing() {
    console.log(styles)
    return (
       <section id={styles.landing}>
      <div className="container">
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
              <button className={`${styles.btn} ${styles['home__cta--btn']}`}>Login</button>
            </div>
            <figure className={styles['landing__image--mask']}>
              <Image src={landingImg} alt="landing" />
            </figure>
          </div>
        </div>
      </div>
    </section>
    )
}