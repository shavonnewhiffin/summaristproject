"use client"

import React, { useEffect, useState } from "react"
import styles from "../styles/home/Statistics.module.css"

export default function Statistics() {

  const headingsFirst = ['Enhance your knowledge', 'Achieve greater success', 'Improve your health', ' Develop better parenting skills', 'Increase happiness', 'Be the best version of yourself!'];

  const headingsSecond = ['Expand your learning', 'Accomplish your goals', 'Strengthen your vitality', 'Become a better caregiver', 'Improve your mood', 'Maximize your abilities'];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevIndex) => (prevIndex + 1) % headingsFirst.length);
    }, 2000);

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.statistics}>
     <div className="container container--statistics">
    <div className="row">
      <div className={styles.statistics__wrapper}>
        <div className={styles['statistics__content--header']}>
          {headingsFirst.map((heading, index) => (
            <div
              key={index}
              className={`${styles.statistics__heading} ${
                index === active
                  ? `${styles['statistics__heading--active']} ${styles['rotating-heading']}`
                  : ''
              }`}
            >
              {heading}
            </div>
          ))}
        </div>
        <div className={styles['statistics__content--details']}>
          <div className={styles.statistics__data}>
            <div className={styles['statistics__data--number']}>93%</div>
            <div className={styles['statistics__data--title']}>
              of Summarist members <b>significantly increase</b> reading
              frequency.
            </div>
          </div>
          <div className={styles.statistics__data}>
            <div className={styles['statistics__data--number']}>96%</div>
            <div className={styles['statistics__data--title']}>
              of Summarist members <b>establish better</b> habits.
            </div>
          </div>
          <div className={styles.statistics__data}>
            <div className={styles['statistics__data--number']}>90%</div>
            <div className={styles['statistics__data--title']}>
              have made <b>significant positive</b> change to their lives.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.statistics__wrapper}>
        <div
          className={`${styles['statistics__content--details']} ${styles['statistics__content--details-second']}`}
        >
          <div className={styles.statistics__data}>
            <div className={styles['statistics__data--number']}>91%</div>
            <div className={styles['statistics__data--title']}>
              of Summarist members <b>report feeling more productive</b> after
              incorporating the service into their daily routine.
            </div>
          </div>
          <div className={styles.statistics__data}>
            <div className={styles['statistics__data--number']}>94%</div>
            <div className={styles['statistics__data--title']}>
              of Summarist members have <b>noticed an improvement</b> in
              their overall comprehension and retention of information.
            </div>
          </div>
          <div className={styles.statistics__data}>
            <div className={styles['statistics__data--number']}>88%</div>
            <div className={styles['statistics__data--title']}>
              of Summarist members <b>feel more informed</b> about current
              events and industry trends since using the platform.
            </div>
          </div>
        </div>
        <div
          className={`${styles['statistics__content--header']} ${styles['statistics__content--header-second']}`}
        >
               {headingsSecond.map((heading, index) => (
            <div
              key={index}
              className={`${styles.statistics__heading} ${
                index === active
                  ? `${styles['statistics__heading--active']} ${styles['rotating-heading']}`
                  : ''
              }`}
            >
              {heading}
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    </section>
  )
}
