import React from 'react'
import { ImSpinner8 } from "react-icons/im";
import styles from '../../styles/skeletons/Skeletons.module.css'

export const AudioLoading = () => {
  return (
    <div className={styles['spinner__blue--wrapper']}>
        <ImSpinner8 className={styles['spinner__blue']}/>
    </div>
  )
}
