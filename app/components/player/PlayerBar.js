"use client";
import { useContext, useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import styles from "../../styles/dashboard/Player.module.css";
import Track from "./Track";
import Controls from "./Controls";
import Progress from "./Progress";
import { useAudioPlayerContext } from "../../src/context/audio-player-context";
import { AuthContext } from "../../src/context/auth-context";
import { db } from "../../src/firebase";

const PlayerBar = ({ book }) => {
  const { currentTrack, isPlaying, setIsPlaying, audioRef } = useAudioPlayerContext();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  async function handleEnded() {
    setIsPlaying(false);

    if (!user) return;

    try {
      await setDoc(doc(db, "customers", user.uid, "finished", book.id), book);
    } catch (error) {
      console.error("Error marking book as finished:", error);
    }
  }

  return (
    <div className={styles.audio__wrapper}>
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="auto"
        onEnded={handleEnded}
      />
      <Track book={book} />
      <Controls />
      <Progress />
    </div>
  );
};

export default PlayerBar;
