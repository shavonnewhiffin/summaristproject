import React from 'react'
import Sidebar from './Sidebar'
import Search from './Search'
import Selected from './Selected'
import Recommended from './Recommended'
import styles from '../../styles/for-you/ForYou.module.css'

const ForYou = () => {
  return (
    <div>
      <Sidebar />
      <div className={styles.wrapper}>
        <Search />
        <div className="row">
          <div className="container">
            <Selected />
            <Recommended />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForYou