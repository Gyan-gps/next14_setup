import React from 'react'
import TopNav from './TopHeader'
import './index.scss'
import MenuOne from './MenuOne'

function Headers() {
  return (
    <div>
      <TopNav container="container" />
      <MenuOne />
    </div>
  )
}

export default Headers