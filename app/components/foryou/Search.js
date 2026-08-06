import React from "react";
import { FaBars } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import styles from "../../styles/for-you/Search.module.css";

export default function Search() {
  return (
    <div className={styles.search__background}>
      <div className={styles.search__wrapper}>
        <div className={styles.search__content}>
          <div className={styles.search}>
            <div className={styles["search__input--wrapper"]}>
              <input
                type="text"
                className={styles.search__input}
                placeholder="Search for books"
              />
              <div className={styles.search__icon}>
                <IoIosSearch className="icons" />
              </div>
            </div>
          </div>
          <div className={styles['sidebar__toggle--btn']}>
            <FaBars className="icons" />
          </div>
        </div>
      </div>
    </div>
  );
}
