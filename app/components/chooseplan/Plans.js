"use client"
import { useState } from 'react'
import { IoNewspaper } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa6";
import styles from '../../styles/choose-plan/Choose.module.css'

const Plans = () => {

const [selectedPlan, setSelectedPlan] = useState('yearly')

  return (
    <div className="row">
        <div className="container">
            <div className={styles['plan__features--wrapper']}>
                <div className={styles['plan__features']}>
                    <figure className={styles['plan__features--icon']}>
                        <IoNewspaper />
                    </figure>
                    <div className={styles['plan__features--text']}>
                        <b>Key ideas in a few minutes</b> with many books to read
                    </div>
                </div>
                <div className={styles['plan__features']}>
                    <figure className={styles['plan__features--icon']}>
                        <RiPlantFill />
                    </figure>
                    <div className={styles['plan__features--text']}>
                        <b>3 million</b> people growing with Summarist everyday
                    </div>
                </div>
                <div className={styles['plan__features']}>
                    <figure className={styles['plan__features--icon']}>
                        <FaHandshake />
                    </figure>
                    <div className={styles['plan__features--text']}>
                        <b>Precise recommendations</b> collections curated by experts
                    </div>
                </div>
            </div>
            <div className={styles['section__title']}>
                Choose the plan that fits you
            </div>
            <div className={`${styles['plan__card']} ${selectedPlan === 'yearly'? styles['plan__card--active'] : ''}`} onClick={() => {setSelectedPlan('yearly')}}>
                <div className={styles['plan__card--circle']}>
                    <div className={styles['plan__card--dot']}></div>
                </div>
                <div className={styles['plan__card--content']}>
                    <div className={styles['plan__card--title']}>Premium Plus Yearly</div>
                    <div className={styles['plan__card--price']}>$99.99/year</div>
                    <div className={styles['plan__card--text']}>7 day free trial included</div>
                </div>
            </div>
        </div>
        <div className={styles['plan__card--seperator']}>
            <div className={styles['plan__seperator']}>or</div>
        </div>
              <div className={`${styles['plan__card']} ${selectedPlan === 'monthly' ? styles['plan__card--active'] : '' }`} onClick={() =>(setSelectedPlan('monthly'))}>
                <div className={styles['plan__card--circle']}>
                    <div className={styles['plan__card--dot']}></div>
                </div>
                <div className={styles['plan__card--content']}>
                    <div className={styles['plan__card--title']}>Premium Monthly</div>
                    <div className={styles['plan__card--price']}>$9.99/month</div>
                    <div className={styles['plan__card--text']}> No trial included</div>
                </div>
            </div>
            <div className={styles['plan__card--cta']}>
                <span className={styles['btn--wrapper']}>
                    <button className={styles['btn']}>
                        <span>Start your first month</span>
                    </button>
                </span>
                <div className={styles['plan__disclaimer']}>30-day money back guarantee, no questions asked.</div>
            </div>
    </div>
  )
}

export default Plans
