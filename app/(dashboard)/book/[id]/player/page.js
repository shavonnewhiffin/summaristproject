import React from "react";
import styles from "../../../../styles/dashboard/Player.module.css"
import { TbRewindBackward10 } from "react-icons/tb";
import { TbRewindForward10 } from "react-icons/tb";
import { FaPlayCircle } from "react-icons/fa";


export default async function player ({params}) {
 const { id } = await params;
  const response = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
  );
  const book = await response.json();
  console.log(book);

  return (
    <div className={styles.summary}>
      <div className={styles.audiobook__summary}>
        <div className={styles['audiobook__summary--title']}>
          <b>{book.title}</b>
        </div>
        <div className={styles['audiobook__summary--text']}>{book.summary}</div>
      </div>
       <div className={styles.audio__wrapper}>
        <audio src=""></audio>
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
        <div className={styles['audio__controls--wrapper']}>
          <div className={styles.audio__controls}>
            <button className={styles['audio__controls--btn']}>
            <TbRewindBackward10 />
            </button>
            <button className={`${styles['audio__controls--btn']} ${styles['audio__controls--btn-play']}`}>
             <FaPlayCircle />
            </button>
            <button className={styles['audio__controls--btn']}>
            <TbRewindForward10 />
            </button>
          </div>
        </div>
        <div className={styles['audio__progress--wrapper']}>
            <div className={styles.audio__time}>
                00:00
            </div>
            <input type="range" className={styles['audio__progress--bar']} />
            <div className={styles.audio__time}>03:24</div>
        </div>
      </div>
    </div>
  );
};

