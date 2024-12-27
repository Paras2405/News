import React from 'react'
import News from '../components/News'
const Entertainment = () => {
  const category="entertainment"
  return (
    <div>
      <News category={category}></News>
    </div>
  )
}

export default Entertainment
