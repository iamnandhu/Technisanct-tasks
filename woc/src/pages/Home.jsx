import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import CenterSection from '../components/Center-Section/CenterSection'
import Company from '../components/Companies/Company'
import Commit from '../components/Commitment/Commit'

const Home = () => {
  return <Fragment>
            <Header/>
            <CenterSection/>
            <Company/>
            <Commit/>
         </Fragment>
}

export default Home