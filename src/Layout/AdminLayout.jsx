import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarTo from '../Components/NavbarTo'
import FooterTo from '../Components/FooterTo'

export default function AdminLayout() {
  return (
    <><NavbarTo home="/home" about="/about" contact="/contact" chat="/groupchat" setting="/setting" chating="Group_chat_both"  />
    <main>
        <Outlet/>
    </main>
    <FooterTo/>
      
    </>
  )
}
