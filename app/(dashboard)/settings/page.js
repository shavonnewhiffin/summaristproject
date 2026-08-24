import React from 'react'
import styles from '../../styles/dashboard/Settings.module.css'

const page = () => {
  return (
    <div className="container">
        <div className="row">
            <div className={`${styles['section__title']} ${styles['page__title']}`}>
                Settings
            </div>
            <div className={styles['settings__content']}>
                <div className={styles['settings__sub-title']}>Your Subscription Plan</div>
                <div className={styles['settings__text']}>Premium</div>
            </div>
            <div className={styles['settings__content']}>
                <div className={styles['settings__sub-title']}>Email</div>
                <div className={styles['settings__text']}>shavonne@gmail.com</div>
            </div>
        </div>
    </div>
  )
}

export default page