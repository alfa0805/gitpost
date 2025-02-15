import React from 'react'
import Header from '../companents/Header'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-[1240px] h-full px-5 mx-auto">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Home