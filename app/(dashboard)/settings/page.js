"use client";

import { useContext, useEffect, useState } from "react";
import Link from 'next/link'
import { AuthContext } from "../../src/context/auth-context";
import styles from "../../styles/dashboard/Settings.module.css";
import LoginPrompt from '../../components/dashboard/LoginPrompt';
import { getPremiumStatus } from '../../components/chooseplan/GetPremiumStatus'

const page = () => {
  const { user, loading } = useContext(AuthContext);
  const [isPremium, setIsPremium] = useState(false);

useEffect(() => {
  if (!user) return;

  const checkPremium = async () => {
    const status = await getPremiumStatus();
    setIsPremium(status);
  }

  checkPremium();
},[user])

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
          <div className={styles["settings__text"]}>{isPremium? "Premium" : "Basic"}</div>
          {!isPremium? (<Link className={`${styles["settings__upgrade--btn"]} ${styles['btn']}`} href="/choose-plan">
            Upgrade to Premium
            </Link> ) : null}
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
