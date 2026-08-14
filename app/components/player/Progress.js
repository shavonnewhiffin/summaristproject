import React, { useEffect, useState } from 'react'
import styles from '../../styles/dashboard/Player.module.css'
import { useAudioPlayerContext } from '../../src/context/audio-player-context'

const formatTime = (seconds) => {
  if (!seconds || Number.isNaN(seconds)) return '00:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

const Progress = () => {
  const { audioRef } = useAudioPlayerContext()
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration || 0)

    if (audio.readyState >= 1) {
      updateDuration()
      updateTime()
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('durationchange', updateDuration)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('durationchange', updateDuration)
    }
  }, [audioRef])

  const handleSeek = (e) => {
    const value = Number(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = value
    }
    setCurrentTime(value)
  }

  const progressPercent = duration ? (currentTime / duration) * 100 : 0

  return (
        <div className={styles['audio__progress--wrapper']}>
            <div className={styles.audio__time}>
                {formatTime(currentTime)}
            </div>
            <input
              type="range"
              className={styles['audio__progress--bar']}
              min={0}
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              style={{
                background: `linear-gradient(to right, rgb(43, 217, 124) ${progressPercent}%, rgb(109, 120, 125) ${progressPercent}%)`,
              }}
            />
            <div className={styles.audio__time}>{formatTime(duration)}</div>
        </div>
  )
}

export default Progress
