import React from 'react'
import styles from '../../styles/for-you/ForYou.module.css'
import { BookCardSkeleton } from './BookCardSkeleton'

export const SuggestedSkeleton = () => {
  return (
    <div>
        <div className="title">Suggested Books</div>
        <div className="sub-title">Browse these books</div>
        <div className={styles['foryou__books--wrapper']}>
          {Array.from({ length: 5 }).map((_, index) => (
            <BookCardSkeleton key={index} />
          ))}
        </div>
    </div>
  )
}
