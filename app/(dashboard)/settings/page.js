"use client";

import { useContext } from "react";
import { AuthContext } from "../../src/context/auth-context";
import styles from "../../styles/dashboard/Settings.module.css";
import LoginPrompt from '../../components/dashboard/LoginPrompt';

const page = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);

  if (loading) return null;

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
<LoginPrompt />
  );
};

export default page;
