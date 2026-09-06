import React from 'react'
import styles from '../../styles/skeletons/Skeletons.module.css'

export const SearchResultsSkeleton = () => {
  return (
    <div className={ `${styles['skeleton']} ${styles['searchresults__skeleton--wrapper']}` }>
      <div className={`${styles['searchresults__skeleton']} ${styles['skeleton']}`}></div>
      <div className={`${styles['searchresults__skeleton']} ${styles['skeleton']}`}></div>
    </div>
  )
}
