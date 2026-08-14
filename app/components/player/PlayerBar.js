"use client";
import { useEffect } from "react";
import styles from "../../styles/dashboard/Player.module.css";
import Track from "./Track";
import Controls from "./Controls";
import Progress from "./Progress";
import { useAudioPlayerContext } from "../../src/context/audio-player-context";

const PlayerBar = ({ book }) => {
  const { currentTrack, isPlaying, setIsPlaying, audioRef } = useAudioPlayerContext();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div className={styles.audio__wrapper}>
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      />
      <Track book={book} />
      <Controls />
      <Progress />
    </div>
  );
};

export default PlayerBar;
