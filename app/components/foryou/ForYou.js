import React from 'react'
import Selected from './Selected'
import Recommended from './Recommended'
import Suggested from './Suggested'

const ForYou = () => {
  return (
    <div>
        <div className="row">
          <div className="container">
            <Selected />
            <Recommended />
            <Suggested />
          </div>
        </div>
      </div>
  )
}

export default ForYou