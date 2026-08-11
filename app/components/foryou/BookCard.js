import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/for-you/BookCard.module.css'
import { CiClock2 } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";

 export default function BookCard({ book }){
  console.log(book)
  return (
    <Link href={`/book/${book.id}`} className={styles.book}>
      <div className={styles['book__pill']} style={{ display: book.subscriptionRequired ? 'block' : 'none' }}>Premium</div>
      <figure className={styles['book__image--wrapper']}>
        <Image className={styles['book__image']} src={`${book.imageLink}`} fill loading="lazy" alt="Book Cover" />
      </figure>
      <div className={styles['book__title']}>{book.title}</div>
      <div className={styles['book__author']}>{book.author}</div>
      <div className={styles['book__sub-title']}>{book.subTitle}</div>
      <div className={styles['book__details--wrapper']}>
        <div className={styles['book__details']}>
          <div className={styles['book__details--icon']}>
            <CiClock2 />
          </div>
          <div className={styles['book__details--text']}>03:24</div>
        </div>
        <div className={styles['book__details']}>
          <div className={styles['book__details--icon']}>
            <IoMdStarOutline />
          </div>
          <div className={styles['book__details--text']}>{book.averageRating}</div>
        </div>
      </div>
    </Link>
  )
}


