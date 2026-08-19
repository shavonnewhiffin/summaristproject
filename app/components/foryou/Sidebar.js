"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import styles from "../../styles/for-you/Sidebar.module.css";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { LiaPenAltSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { MdLogout } from "react-icons/md";
import { signOut } from "firebase/auth";
import { auth } from "../../src/firebase";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("For you");
  const [user, setUser] = useState(true);
  const [authError, setAuthError] = useState(null);

  const router = useRouter();

  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }

  function handleLogout() {
    console.log('sign out')
    signOut(auth)
      .then(() => {
        setUser(false);
        router.push('/');
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        setAuthError(error.message);
      });
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
          <div
            className={styles["sidebar__link--wrapper"]}
            onClick={() => handleTabClick("For you")}
          >
            <div
              className={`${styles["sidebar__link--line"]} ${activeTab === "For you" ? styles["active--tab"] : ""}`}
            ></div>
            <div className={styles["sidebar__icon--wrapper"]}>
              <IoHomeOutline className="icons" />
            </div>
            <div className={styles["sidebar__link--text"]}>For you</div>
          </div>

          <div
            className={styles["sidebar__link--wrapper"]}
            onClick={() => handleTabClick("My Library")}
          >
            <div
              className={`${styles["sidebar__link--line"]} ${activeTab === "My Library" ? styles["active--tab"] : ""}`}
            ></div>
            <div className={styles["sidebar__icon--wrapper"]}>
              <IoBookmarkOutline className="icons" />
            </div>
            <div className={styles["sidebar__link--text"]}>My Library</div>
          </div>

          <div
            className={`${styles["sidebar__link--wrapper"]} ${styles["sidebar__link--not-allowed"]}`}
          >
            <div className={styles["sidebar__link--line"]}></div>
            <div className={styles["sidebar__icon--wrapper"]}>
              <LiaPenAltSolid className="icons" />
            </div>
            <div className={styles["sidebar__link--text"]}>Highlights</div>
          </div>

          <div
            className={`${styles["sidebar__link--wrapper"]} ${styles["sidebar__link--not-allowed"]}`}
          >
            <div className={styles["sidebar__link--line"]}></div>
            <div className={styles["sidebar__icon--wrapper"]}>
              <IoIosSearch className="icons" />
            </div>
            <div className={styles["sidebar__link--text"]}>Search</div>
          </div>
        </div>
        <div className={styles.sidebar__bottom}>
          <div
            className={styles["sidebar__link--wrapper"]}
            onClick={() => {
              handleTabClick("Settings");
            }}
          >
            <div
              className={`${styles["sidebar__link--line"]} ${activeTab === "Settings" ? styles["active--tab"] : ""}`}
            ></div>
            <div className={styles["sidebar__icon--wrapper"]}>
              <IoSettingsOutline className="icons" />
            </div>
            <div className={styles["sidebar__link--text"]}>Settings</div>
          </div>
          <div
            className={`${styles["sidebar__link--wrapper"]} ${styles["sidebar__link--not-allowed"]}`}
          >
            <div className={styles["sidebar__link--line"]}></div>
            <div className={styles["sidebar__icon--wrapper"]}>
              <HiOutlineQuestionMarkCircle className="icons" />
            </div>
            <div className={styles["sidebar__link--text"]}>Help & Support</div>
          </div>
          <div
            className={`${styles["sidebar__link--wrapper"]}`}
          >
            <div className={styles["sidebar__link--line"]}></div>
            <div className={styles["sidebar__icon--wrapper"]}>
              <MdLogout className="icons" />
            </div>
            <div className={styles["sidebar__link--text"]} onClick={() => handleLogout()}>{!user ? ('Login') : ('Logout')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
