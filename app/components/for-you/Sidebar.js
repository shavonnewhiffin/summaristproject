"use client"

import React, { useState } from 'react'
import styles from '../../styles/Sidebar.module.css'
import Image from 'next/image'
import { IoHomeOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { TiPen } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io"; 

const Sidebar = () => {

  const [activeTab, setActiveTab] = useState('For you');

  function handleTabClick(tabName){
    setActiveTab(tabName);
  }

  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebar__logo}>
          <figure>
            <Image src="/images/logo.png" alt="Logo" width={160} height={44} />
          </figure>
        </div>
        <div className={styles.sidebar__wrapper}>
          <div className={styles.sidebar__top}>

            <div className={styles['sidebar__link--wrapper']} onClick={() => handleTabClick('For you')}>
              <div className={`${styles['sidebar__link--line']} ${activeTab === 'For you' ? styles['active--tab'] : '' }`}></div>
              <div className={styles['sidebar__icon--wrapper']}>
                <IoHomeOutline />
              </div>
              <div className={styles['sidebar__link--text']}>For you</div>
            </div>

            <div className={styles['sidebar__link--wrapper']} onClick={() => handleTabClick('My Library')}>
              <div className={`${styles['sidebar__link--line']} ${activeTab === 'My Library' ? styles['active--tab'] : '' }`}></div>
              <div className={styles['sidebar__icon--wrapper']}>
                  <IoBookmarkOutline />
              </div>
              <div className={styles['sidebar__link--text']}>My Library</div>
            </div>

            <div className={styles['sidebar__link--wrapper']} onClick={() => {
              handleTabClick('Highlights');
            }}>
              <div className={`${styles['sidebar__link--line']} ${activeTab === 'Highlights' ? styles['active--tab'] : '' }`}></div>
              <div className={styles['sidebar__icon--wrapper']}>
                <TiPen />
              </div>
              <div className={styles['sidebar__link--text']}>Highlights</div>
            </div>  

            <div className={styles['sidebar__link--wrapper']} onClick={() => {
              handleTabClick('Search');
            }}>
              <div className={`${styles['sidebar__link--line']} ${activeTab === 'Search' ? styles['active--tab'] : '' }`}></div>
              <div className={styles['sidebar__icon--wrapper']}>
                <IoIosSearch />
              </div>
              <div className={styles['sidebar__link--text']}>Search</div>
            </div>
          </div>
          <div className={styles.sidebar__bottom}>

          </div>
        </div>
    </div>
  )
}

export default Sidebar