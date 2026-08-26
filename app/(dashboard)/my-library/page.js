import React from 'react'
import styles from '../../styles/for-you/ForYou.module.css'

const page = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="title">
                Saved Books
            </div>
            <div className={styles['foryou__subtitle']}>
                2 items
            </div>
            <div className={styles['foryou__books--wrapper']}>
                
            </div>
            <div className="title">
                Finished
            </div>
            <div className={styles['foryou__subtitle']}>
                13 items
            </div>
            <div className={styles['foryou__books--wrapper']}>

            </div>
        </div>
        </div>
  )
}

export default page