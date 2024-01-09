import React from 'react'
import Navbar from '../components/header/Navbar'
import Panel from '../components/panel/Panel'
import Footer from '../components/footer/Footer'
import ShoppingCart from '../components/shoopingCart/ShoppingCart'

function ShoppingCartPage() {
  return (
    <>
      <Navbar/>
      <Panel/>
      <ShoppingCart/>
      <Footer/>
    </>
  )
}

export default ShoppingCartPage