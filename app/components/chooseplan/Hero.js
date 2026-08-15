import React from "react";
import Image from "next/image";
import styles from "../../styles/choose-plan/Choose.module.css"
import pricing from '../../assets/pricing-top.png'

const Hero = () => {
  return (
    <div className="plan">
      <div className={styles['plan__header--wrapper']}>
        <div className={styles['plan__header--wrapper::before']}>
          <div className={styles.plan__header}>
            <div className={styles.plan__title}>
              Get unlimited access to many amazing books to read
            </div>
            <div className={styles['plan__sub--title']}>
              Turn ordinary moments into amazing learning opportunities
            </div>
            <figure className={styles['plan__img--mask']}>
              <Image
                src={pricing}
                loading="lazy"
                alt="pricing"
                width="860"
                height="722"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
