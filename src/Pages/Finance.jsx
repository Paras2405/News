import React from 'react'
import News from '../components/News'
const Finance = () => {
  const category="business"
  return (
    <div>
      <News category={category}></News>
    </div>
  )
}

export default Finance
