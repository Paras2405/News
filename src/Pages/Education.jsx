import React from 'react'
import News from '../components/News'

const Education = () => {
  const category="science"
  return (
    <div>
      <News category={category}></News>
    </div>
  )
}

export default Education
