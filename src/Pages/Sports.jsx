import React from 'react'
import News from '../components/News'
const Sports = () => {
  const category="sports"
  return (
    <div>
      <News category={category}></News>
    </div>
  )
}

export default Sports
