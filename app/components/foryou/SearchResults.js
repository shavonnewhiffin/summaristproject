import React from 'react'
import Link from 'next/link'
import { GoClock } from "react-icons/go";
import styles from '../../styles/for-you/SearchResults.module.css'

export const SearchResults = ({ results, isSearching }) => {
  if (isSearching) {
    return (
      <div className={styles['search__books--wrapper']}>
        <div className={styles['search__book--details']}>Searching...</div>
      </div>
    )
  }

  if (!results || results.length === 0) {
    return (
      <div className={styles['search__books--wrapper']}>
        <div className={styles['search__book--details']}>No books found</div>
      </div>
    )
  }

  return (
    <div className={styles['search__books--wrapper']}>
      {results.map((book) => (
        <Link href={`/book/${book.id}`} key={book.id} className={styles['search__book--link']}>
          <figure className={styles['book__image--wrapper']}>
            <img src={book.imageLink} alt="" className={styles['book__image']} />
          </figure>
          <div className={styles['search__book--details']}>
            <div className={styles['search__book--title']}>{book.title}</div>
            <div className={styles['search__book--author']}>{book.author}</div>
            <div className={styles['search__book--duration']}>
              <div className={styles['search__book--icon']}><GoClock /></div>
              <div className={styles['search__book--text']}>03:24</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
