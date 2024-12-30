import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/boards">게시판</Link>
    </>
  )
}

export default Home