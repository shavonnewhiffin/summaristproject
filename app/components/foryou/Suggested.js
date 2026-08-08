import React from 'react'
import styles from '../../styles/for-you/ForYou.module.css'
import BookCard from './BookCard'

export default async function Suggested() {
const response = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested');
const data = await response.json();
const books = data.slice(0, 5);

  return (
    <div>
        <div className="title">Suggested Books</div>
        <div className="sub-title">Browse these books</div>
        <div className={styles['foryou__books--wrapper']} >
           {books.map((book) => (<BookCard key={book.id} book={book} />))}
        </div>
    </div>
  )
}