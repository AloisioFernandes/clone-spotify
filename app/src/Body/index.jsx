import React from 'react'
import Header from '../components/Header'

import './Body.css'

function Body({ spotify }) {
  return(
    <div className="body">
      <Header spotify={spotify} />
    </div>
  )
}

export default Body