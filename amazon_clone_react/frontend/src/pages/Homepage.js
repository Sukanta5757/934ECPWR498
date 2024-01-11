import React from 'react'
import Panel from '../components/panel/Panel'
import Benner from '../components/benner/Benner'
import Product from '../components/product/Product'
import TodayDeal from '../components/product/todayDeal'

function Homepage() {
  return (
    <>
        <Panel/>
        <Benner/>
        <Product/>
        <TodayDeal/>
    </>
  )
}

export default Homepage