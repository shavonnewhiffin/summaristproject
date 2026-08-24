"use client";

import { useContext } from "react";
import { AuthContext } from "../../src/context/auth-context";
import Image from "next/image";
import styles from "../../styles/dashboard/Settings.module.css";
import Laptop from "../../assets/login.png";

const page = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return user ? (
    <div className="container">
      <div className="row">
        <div className={`${styles["section__title"]} ${styles["page__title"]}`}>
          Settings
        </div>
        <div className={styles["settings__content"]}>
          <div className={styles["settings__sub-title"]}>
            Your Subscription Plan
          </div>
          <div className={styles["settings__text"]}>Premium</div>
        </div>
        <div className={styles["settings__content"]}>
          <div className={styles["settings__sub-title"]}>Email</div>
          <div className={styles["settings__text"]}>{user?.email}</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container">
      <div className="row">
        <div className={styles['login__prompt']}>
          <figure className={styles['login__img--wrapper']}>
            <Image src={Laptop} />
          </figure>
          <div className={styles['login__text']}>Login to your account to see your  details.</div>
          <button className={`btn ${styles['login__btn']}`}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default page;
