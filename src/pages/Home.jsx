import React from 'react';
import Header from '../companents/Header';
import { Outlet } from 'react-router-dom';


function Home() {
  const url ="https://realauto.limsa.uz/api/locations"
  return (
    <div className="max-w-[1240px] h-full  mx-auto ">
      <Header/>
      <Outlet/>
      
    </div>
  )
}

export default Home