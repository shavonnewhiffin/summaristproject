import React from 'react'
import styles from '../../styles/for-you/ForYou.module.css'

const Recommended = () => {
  return (
    <div>
        <div className="title">Recommended for you</div>
        <div className="sub-title">We think you'll like these</div>
        <div className={styles['foryou__recommended--books']} >
            Book
        </div>
    </div>
  )
}

export default Recommended