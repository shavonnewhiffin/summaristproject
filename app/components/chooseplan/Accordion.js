"use client"
import { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import styles from '../../styles/choose-plan/Choose.module.css'

const Accordian = () => {

const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="row">
        <div className="container">
            <div className={styles['faq__wrapper']}>
                <div className={styles['accordion__card']}>
                  <div className={styles['accordion__header']} onClick={() => (setOpenIndex(openIndex === 0 ? null : 0))}>
                    <div className={styles['accordion__title']}>How does the free 7-day trial work?</div>
                    <FaChevronDown style={{transform: openIndex === 0 ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
                  </div>
                  <div className={`${styles.collapse} ${openIndex === 0 ? styles.show : ''}`}>
                    <div className={styles['accordion__body']}>
                      Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.
                    </div>
                  </div>
                </div>
                <div className={styles['accordion__card']}>
                  <div className={styles['accordion__header']} onClick={() => (setOpenIndex(openIndex === 1 ? null : 1))}>
                    <div className={styles['accordion__title']}>Can I switch subscriptions from monthly to yearly, or yearly to monthly?</div>
                    <FaChevronDown  style={{transform: openIndex === 1 ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                  </div>
                  <div className={`${styles.collapse} ${openIndex === 1 ? styles.show : ''}`}>
                    <div className={styles['accordion__body']}>
                    While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.
                    </div>
                  </div>
                </div>
                <div className={styles['accordion__card']}>
                  <div className={styles['accordion__header']} onClick={() => (setOpenIndex(openIndex === 2 ? null : 2))}>
                    <div className={styles['accordion__title']}>What's included in the Premium plan?</div>
                    <FaChevronDown style={{transform: openIndex === 2 ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                  </div>
                  <div className={`${styles.collapse} ${openIndex === 2 ? styles.show : ''}`}>
                    <div className={styles['accordion__body']}>
                      Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.
                    </div>
                  </div>
                </div>
                <div className={styles['accordion__card']}>
                  <div className={styles['accordion__header']} onClick={(() => (setOpenIndex(openIndex === 3 ? null : 3)))}>
                    <div className={styles['accordion__title']}>Can I cancel during my trial or subscription?</div>
                    <FaChevronDown style={{transform: openIndex === 3 ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
                  </div>
                  <div className={`${styles.collapse} ${openIndex === 3 ? styles.show : ''}`}>
                    <div className={styles['accordion__body']}>
                     You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordian
