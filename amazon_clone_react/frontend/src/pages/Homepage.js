import React from 'react'
import Panel from '../components/panel/Panel'
import Benner from '../components/benner/Benner'
import Product from '../components/product/Product'
import TodayDeal from '../components/product/todayDeal'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'

function Homepage() {
  return (
    <>
        <Navbar/>
        <Panel/>
        <Benner/>
        <Product/>
        <TodayDeal/>
        <Footer/>
    </>
  )
}

export default Homepage