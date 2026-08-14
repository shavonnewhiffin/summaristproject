import styles from "../../../../styles/dashboard/Player.module.css";
import PlayerBar from "../../../../components/player/PlayerBar";

export default async function player({ params }) {
  const { id } = await params;
  const response = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
  );
  const book = await response.json();

  return (
    <div className={styles.summary}>
      <div className={styles.audiobook__summary}>
        <div className={styles["audiobook__summary--title"]}>
          <b>{book.title}</b>
        </div>
        <div className={styles["audiobook__summary--text"]}>{book.summary}</div>
      </div>
      <PlayerBar book={book} />
    </div>
  );
}
