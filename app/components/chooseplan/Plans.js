"use client";

import { useContext, useState } from "react";
import { IoNewspaper } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa6";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../src/firebase";
import { AuthContext } from "../../src/context/auth-context";
import styles from "../../styles/choose-plan/Choose.module.css";

const PLANS = {
  monthly: "price_1U9DBmK2wRefiZ5rlxz93BZE",
  yearly: "price_1U9DC0K2wRefiZ5rp4v0RQFz",
};

const Plans = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [selectedPlan, setSelectedPlan] = useState("yearly");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    console.log("user at checkout:", user);

    if (!user) {
      alert("Please sign in before starting your subscription.");
      return;
    }

    try {
      setLoading(true);

      const checkoutSessionsRef = collection(
        db,
        "customers",
        user.uid,
        "checkout_sessions"
      );

      const checkoutSessionRef = await addDoc(checkoutSessionsRef, {
        price: PLANS[selectedPlan],
        quantity: 1,
        mode: "subscription",
        success_url: `${window.location.origin}/for-you`,
          trial_period_days: selectedPlan === "yearly" ? 7 : 0,
        cancel_url: `${window.location.origin}/choose-plan`,
      });

      const unsubscribe = onSnapshot(
        checkoutSessionRef,
        (snapshot) => {
          const data = snapshot.data();

          if (data?.error) {
            console.error("Stripe checkout error:", data.error);
            unsubscribe();
            setLoading(false);
        alert(data.error.message || JSON.stringify(data.error));
          }

          if (data?.url) {
            unsubscribe();
            window.location.assign(data.url);
          }
        }
      );
    } catch (error) {
      console.error("Checkout error:", error);
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <div className="row">
      <div className="container">
        <div className={styles["plan__features--wrapper"]}>
          <div className={styles["plan__features"]}>
            <figure className={styles["plan__features--icon"]}>
              <IoNewspaper />
            </figure>
            <div className={styles["plan__features--text"]}>
              <b>Key ideas in a few minutes</b> with many books to read
            </div>
          </div>

          <div className={styles["plan__features"]}>
            <figure className={styles["plan__features--icon"]}>
              <RiPlantFill />
            </figure>
            <div className={styles["plan__features--text"]}>
              <b>3 million</b> people growing with Summarist everyday
            </div>
          </div>

          <div className={styles["plan__features"]}>
            <figure className={styles["plan__features--icon"]}>
              <FaHandshake />
            </figure>
            <div className={styles["plan__features--text"]}>
              <b>Precise recommendations</b> collections curated by experts
            </div>
          </div>
        </div>

        <div className={styles["section__title"]}>
          Choose the plan that fits you
        </div>

        <div
          className={`${styles["plan__card"]} ${
            selectedPlan === "yearly"
              ? styles["plan__card--active"]
              : ""
          }`}
          onClick={() => setSelectedPlan("yearly")}
        >
          <div className={styles["plan__card--circle"]}>
            <div
              className={
                selectedPlan === "yearly"
                  ? styles["plan__card--dot"]
                  : ""
              }
            ></div>
          </div>

          <div className={styles["plan__card--content"]}>
            <div className={styles["plan__card--title"]}>
              Premium Plus Yearly
            </div>
            <div className={styles["plan__card--price"]}>
              $99.99/year
            </div>
            <div className={styles["plan__card--text"]}>
              7 day free trial included
            </div>
          </div>
        </div>
      </div>

      <div className={styles["plan__card--seperator"]}>
        <div className={styles["plan__seperator"]}>or</div>
      </div>

      <div
        className={`${styles["plan__card"]} ${
          selectedPlan === "monthly"
            ? styles["plan__card--active"]
            : ""
        }`}
        onClick={() => setSelectedPlan("monthly")}
      >
        <div className={styles["plan__card--circle"]}>
          <div
            className={
              selectedPlan === "monthly"
                ? styles["plan__card--dot"]
                : ""
            }
          ></div>
        </div>

        <div className={styles["plan__card--content"]}>
          <div className={styles["plan__card--title"]}>
            Premium Monthly
          </div>
          <div className={styles["plan__card--price"]}>
            $9.99/month
          </div>
          <div className={styles["plan__card--text"]}>
            No trial included
          </div>
        </div>
      </div>

      <div className={styles["plan__card--cta"]}>
        <span className={styles["btn--wrapper"]}>
          <button
            className={styles["btn"]}
            onClick={handleCheckout}
            disabled={loading || authLoading}
          >
            <span>
              {loading
                ? "Taking you to checkout..."
                : "Start your first month"}
            </span>
          </button>
        </span>

        <div className={styles["plan__disclaimer"]}>
          30-day money back guarantee, no questions asked.
        </div>
      </div>
    </div>
  );
};

export default Plans;