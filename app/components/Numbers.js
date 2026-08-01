import styles from '../styles/Numbers.module.css'
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import { BiCrown } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";

export default function Numbers() {
  return (
  <section id="numbers">
      <div className="container">
        <div className="row">
          <div className="section__title">Start growing with Summarist now</div>
          <div className={styles.numbers__wrapper}>
            <div className={styles.numbers}>
              <div className={styles.numbers__icon}>
                <BiCrown />
              </div>
              <div className={styles.numbers__title}>3 Million</div>
              <div className={styles['numbers__sub--title']}>Downloads on all platforms</div>
            </div>
            <div className={styles.numbers}>
              <div className={styles.numbers__icon}>
                {Array.from({ length: 4 }).map((_, i) => <BsFillStarFill key={i} />)}
                <BsStarHalf />
              </div>
              <div className={styles.numbers__title}>4.5 Stars</div>
              <div className={styles['numbers__sub--title']}>
                Average ratings on iOS and Google Play
              </div>
            </div>
            <div className={styles.numbers}>
              <div className={styles.numbers__icon}>
                <RiLeafLine />
              </div>
              <div className={styles.numbers__title}>97%</div>
              <div className={styles['numbers__sub--title']}>
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}