import React from 'react'
import News from '../components/News'
const Home = () => {
  const category="general"
  return (
    <div>
      <News category={category}></News>
    </div>
  )
}

export default Home
