import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterTo from '../Components/FooterTo'
import NavbarTo from '../Components/NavbarTo'
export default function UserLayout() {
  return (
    <>
    <NavbarTo home="/home" about="/about" contact="/contact" chat="/groupchat" setting="/setting" chating="Chating" />
      <main>
      <Outlet/>
      </main>
      <FooterTo/>
      
       
    </>
  )
}
