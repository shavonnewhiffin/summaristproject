import React from 'react'
import styles from '../../styles/for-you/ForYou.module.css'
import { BookCardSkeleton } from './BookCardSkeleton'

export const RecommendedSkeleton = () => {
  return (
    <div>
        <div className="title">Recommended for you</div>
        <div className="sub-title">We think you'll like these</div>
        <div className={styles['foryou__books--wrapper']}>
          {Array.from({ length: 5 }).map((_, index) => (
            <BookCardSkeleton key={index} />
          ))}
        </div>
    </div>
  )
}
