// Import Scripts, Plugins and more 
import React from 'react'

// Import Components 
import Header from "./Header"
import Homepage from "./Homepage"
import Coinpage from "./Coinpage"
import CryptoContext from "./CryptoContext"

const Layout = ({ children, title = "Crypto Watch" }) => {
  return (
    <>
    <div className="layout">
      
    </div>
    <CryptoContext>
      
    <Header />
    <Homepage />
    </CryptoContext>
    </>
  )
}

export default Layout
