import React from 'react'
import News from '../components/News'
const Health = () => {
  const category="health"
  return (
    <div>
      <News category={category}></News>
    </div>
  )
}

export default Health
