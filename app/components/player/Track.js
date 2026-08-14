import React from 'react'
import styles from '../../styles/dashboard/Player.module.css'

const Track = ({ book }) => {
  return (
    <div className={styles['audio__track--wrapper']}>
      <figure className={styles['audio__track--image-mask']}>
        <figure className={styles['book__image--wrapper']}>
          <img className={styles.book__image}></img>
        </figure>
      </figure>
      <div className={styles['audio__details--wrapper']}>
        <div className={styles['audio__track--title']}>{book.title}</div>
        <div className={styles['audio__track--author']}>{book.author}</div>
      </div>
    </div>
  )
}

export default Track
