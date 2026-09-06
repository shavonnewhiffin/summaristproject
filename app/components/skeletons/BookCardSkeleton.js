import React from 'react'
import styles from '../../styles/skeletons/Skeletons.module.css'

export const BookCardSkeleton = () => {
  return (
    <div className={styles.bookcard__skeleton}>
        <div className={`${styles['bookcard__skeleton--image']} ${styles['skeleton']}`}></div>
        <div className={`${styles['bookcard__skeleton--title']} ${styles['skeleton']}`}></div>
        <div className={`${styles['bookcard__skeleton--author']} ${styles['skeleton']}`}></div>
        <div className={`${styles['bookcard__skeleton--subtitle']} ${styles['skeleton']}`}></div>
        <div className={`${styles['bookcard__skeleton--details']} ${styles['skeleton']}`}></div>
    </div>
  )
}
