import React from 'react'
import Sidebar from '../components/Sidebar'
import Body from '../Body'
import Footer from '../components/Footer'

import './Player.css'

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  )
}

export default Player