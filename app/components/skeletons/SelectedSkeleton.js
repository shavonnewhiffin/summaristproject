import React from 'react'
import styles from '../../styles/skeletons/Skeletons.module.css'

export const SelectedSkeleton = () => {
  return (
    <div className={`${styles['selected--skeleton']} ${styles['skeleton']}`}></div>
  )
}
