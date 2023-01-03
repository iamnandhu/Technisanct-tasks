import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import CenterSection from '../components/Center-Section/CenterSection'
import Company from '../components/Companies/Company'


const Home = () => {
  return <Fragment>
            <Header/>
            <CenterSection/>
            <Company/>
         </Fragment>
}

export default Home