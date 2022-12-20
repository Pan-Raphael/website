// Imports
import React from 'react'
import Navbar from './navbar'

// Maincode
export default function Layout({children}) {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
    </div>
  )
}