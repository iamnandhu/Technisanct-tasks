import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import CenterSection from '../components/Center-Section/CenterSection'
import Company from '../components/Companies/Company'
import Commit from '../components/Commitment/Commit'
import Courses from '../components/Courses/Courses'
import Testimonial from '../components/Testimonials/Testimonial'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'

const Home = () => {
  return <Fragment>
            <Header/>
            <CenterSection/>
            <Company/>
            <Commit/>
            <Courses/>
            <Testimonial/>
            <Banner/>
            <Footer/>
         </Fragment>
}

export default Home