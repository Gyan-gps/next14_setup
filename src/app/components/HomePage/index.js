import React from 'react'
import MenuFive from '../common/CategoryHeader/MenuFive'

function HomePage({ data }) {
  return (
    <div>
      <MenuFive categories={data} />
      Home
    </div>
  )
}

export default HomePage