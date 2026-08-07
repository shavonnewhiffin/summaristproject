import React from 'react'
import styles from '../../styles/for-you/Selected.module.css'
import Image from 'next/image'
import { IoIosPlay } from "react-icons/io";

async function Selected(){

const res = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected")
const selected = await res.json();
console.log(selected)

  return (
        <div className="for-you__wrapper">
              <h2 className={styles.foryou__title}>Selected just for you</h2>
              <div className={styles.selected__book}>
                <div className={styles['selected__book--sub-title']}>
                  {selected[0].subTitle}
                </div>
                <div className={styles['selected__book--line']}></div>
                <div className={styles['selected__book--content']}>
                  <figure className={styles['book__image--wrapper']}>
                    <Image className={styles.book__image} src={selected[0].imageLink} alt={selected[0].title} fill loading="lazy" />
                  </figure>
                </div>
                <div className={styles['selected__book--text']}>
                  <div className={styles['selected__book--title']}>
                    {selected[0].title}
                  </div>
                  <div className={styles['selected__book--author']}>
                    {selected[0].author}
                  </div>
                  <div className={styles['selected__book--duration-wrapper']}>
                    <div className={styles['selected__book--icon']}>
                      <IoIosPlay />
                    </div>
                    <div className={styles['selected__book--duration']}>
                      3 mins 23 secs
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Selected;
