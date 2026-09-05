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
            <div className={styles['prompt__books--block-wrapper']}>
                <div className={styles['prompt__books--title']}>Save your favorite books!</div>
                <div className={styles['prompt__books--sub-title']}>When you save a book, it will appear here.</div>
            </div>
            <div className="title">
                Finished
            </div>
            <div className={styles['foryou__subtitle']}>
                13 items
            </div>
            <div className={styles['foryou__books--wrapper']}>

            </div>
              <div className={styles['prompt__books--block-wrapper']}>
                <div className={styles['prompt__books--title']}>Done and dusted!</div>
                <div className={styles['prompt__books--sub-title']}>When you finish a book, you can find it here. later.</div>
            </div>
        </div>
        </div>
  )
}

export default page