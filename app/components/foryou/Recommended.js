import React from 'react'
import styles from '../../styles/for-you/ForYou.module.css'
import BookCard from './BookCard'

export default async function Recommended() {
const response = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended');
const data = await response.json();
const books = data.slice(0, 5);

  return (
    <div>
        <div className="title">Recommended for you</div>
        <div className="sub-title">We think you'll like these</div>
        <div className={styles['foryou__books--wrapper']} >
           {books.map((book) => (<BookCard key={book.id} book={book} />))}
        </div>
    </div>
  )
}

