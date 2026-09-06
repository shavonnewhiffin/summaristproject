import React from 'react'
import styles from '../../styles/skeletons/Skeletons.module.css'

export const BookPageSkeleton = () => {
  return (
    <div className={styles['innerbook__skeleton--wrapper']}>
        <div>
            <div className={`${styles['innerbook__skeleton--title']} ${styles['skeleton']}`}></div>
            <div className={`${styles['innerbook__skeleton--author']} ${styles['skeleton']}`}></div>
            <div className={`${styles['innerbook__skeleton--sub-title']} ${styles['skeleton']}`}></div>
            <div className={`${styles['innerbook__skeleton--details']} ${styles['skeleton']}`}></div>
            <div className={`${styles['innerbook__skeleton--actions']} ${styles['skeleton']}`}></div>
            <div className={`${styles['innerbook__skeleton--header']} ${styles['skeleton']}`}></div>
            <div className={`${styles['innerbook__skeleton--text-block']} ${styles['skeleton']}`}></div>
            <div className={`${styles['innerbook__skeleton--second-textblock']} ${styles['skeleton']}`}></div>
        </div>
        <div className={`${styles['innerbook__skeleton--img-wrapper']} ${styles['skeleton']}`}>
        </div>
    </div>
  )
}
