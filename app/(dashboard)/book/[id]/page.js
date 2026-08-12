import React from "react";
import Link from 'next/link'
import { IoIosStarOutline } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { IoMicOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoBookOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import styles from "../../../styles/dashboard/Book.module.css"

export default async function page({ params }) {
  const { id } = await params;
  const response = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
  );
  const book = await response.json();
  console.log(book);

  return (
    <div className="row">
      < div className="container">
    <div className={styles.inner__wrapper}>
      <div className={styles.inner__book}>
        <div className={styles['inner__book--title']}>{book.title}
        </div>
        <div className={styles['inner__book--author']}>{book.author}</div>
        <div className={styles['inner__book--sub-title']}>{book.subTitle}</div>
        <div className={styles['inner__book--wrapper']}>
          <div className={styles['inner__book--description--wrapper']}>
            <div className={styles['inner__book--description']}>
              <div className={styles['inner__book--icon']}>
              <IoIosStarOutline />
              </div>
              <div className={styles['inner__book--overall-rating']}>{book.averageRating}</div>
              <div className={styles['inner__book--total-rating']}> &nbsp; ({book.totalRating} ratings)</div>
            </div>
            <div className={styles['inner__book--description']}>
              <div className={styles['inner__book--icon']}>
                <GoClock />
              </div>
              <div className={styles['inner__book--duration']}>03:24</div>
            </div>
            <div className={styles['inner__book--description']}>
              <div className={styles['inner__book--icon']}>
                <IoMicOutline />
              </div>
              <div className={styles['inner__book--type']}>{book.type}</div>
            </div>
            <div className={styles['inner__book--description']}>
              <div className={styles['inner__book--icon']}>
                <HiOutlineLightBulb />
              </div>
              <div className={styles['inner__book--key-ideas']}>{book.keyIdeas} Key Ideas</div>
            </div>
          </div>
           </div>
          <div className={styles['inner__book--read-btn--wrapper']}>
            <Link href={`/book/${book.id}/player`} className={styles['inner__book--read-btn']}>
              <div className={styles.readbtn__icon}>
                <IoBookOutline />
              </div>
              <div className={styles.readbtn__text}>Read</div>
            </Link>
            <Link href={`/book/${book.id}/player`}  className={styles['inner__book--read-btn']}>
              <div className={styles.readbtn__icon}>
              <IoMicOutline />
              </div>
              <div className={styles.readbtn__text}>Listen</div>
            </Link>
          </div>
          <div className={styles['inner__book--bookmark']}>
            <div className={styles['inner__book--bookmark-icon']}>
              <FaRegBookmark />
            </div>
            <div className={styles['inner__book--bookmark-text']}>
              Add Title to My Library
            </div>
          </div>
          <div className={styles['inner__book--secondary-title']}> What's it about? </div>
          <div className={styles['inner__book--tags-wrapper']}>
            <div className={styles['inner__book--tag']}>{book.tags?.[0]}</div>
            <div className={styles['inner__book--tag']}>{book.tags?.[1]} </div>
          </div>
          <div className={styles['inner__book--book--description']}>{book.bookDescription}</div>
          <div className={styles['inner__book--secondary-title']}>About the Author</div>
          <div className={styles['inner-book__author--description']}>{book.authorDescription}</div>
      </div>
      <div className={styles['inner__book--img-wrapper']}>
        <figure className={styles['book__img--wrapper']}>
          <img src={book.imageLink} alt="" className={styles.book__img} />
        </figure>
      </div>
    </div>
        </div>
            </div>
  );
}
