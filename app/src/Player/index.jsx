import React from 'react'
import Sidebar from '../components/Sidebar'

import './Player.css'

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
      </div>
    </div>
  )
}

export default Player