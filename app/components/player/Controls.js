import React from 'react'
import { TbRewindBackward10 } from "react-icons/tb";
import { TbRewindForward10 } from "react-icons/tb";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import styles from "../../styles/dashboard/Player.module.css"
import { useAudioPlayerContext } from '../../src/context/audio-player-context';

const Controls = () => {
  const { isPlaying, setIsPlaying, audioRef } = useAudioPlayerContext();

  const seekBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  };

  const seekForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  return (
           <div className={styles['audio__controls--wrapper']}>
          <div className={styles.audio__controls}>
            <button className={styles['audio__controls--btn']} onClick={seekBackward}>
            <TbRewindBackward10 />
            </button>
            <button
              className={`${styles['audio__controls--btn']} ${styles['audio__controls--btn-play']}`}
              onClick={() => setIsPlaying(prev => !prev)}
            >
             {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
            </button>
            <button className={styles['audio__controls--btn']} onClick={seekForward}>
            <TbRewindForward10 />
            </button>
          </div>
        </div>
  )
}

export default Controls
