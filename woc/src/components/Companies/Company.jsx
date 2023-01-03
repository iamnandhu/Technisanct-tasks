import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import './company.css'


export const Company = () => {
  return <Container className='companyContainer'>
            <Row> 
                <h1 className='colab'>Collaborate with 100+ leading universities and comapnies</h1>
                <p className='colab2'>WOC has contributed to students so that they can work in their dream company,<br/> we will continue to stick to our commitment to create an advanced generation,</p>
            </Row>
           
            <Row>
                <Col lg='2' md='3'>
                    <h2 className='d-flex align-items-center gap-1'><i class="ri-google-fill"></i>Google</h2>
                </Col>
                <Col lg='2' md='3'>
                    <h2 className='d-flex align-items-center gap-1'><i class="ri-microsoft-fill"></i>Microsoft</h2>
                </Col>
                <Col lg='2' md='3'>
                    <h2 className='d-flex align-items-center gap-1'><i class="ri-amazon-fill"></i>Amazon</h2>
                </Col>
                <Col lg='2' md='3'>
                    <h2 className='d-flex align-items-center gap-1'><i class="ri-netflix-fill"></i>Netflix</h2>
                </Col>
                <Col lg='2' md='3'>
                    <h2 className='d-flex align-items-center gap-1'><i class="ri-twitter-fill"></i>Twitter</h2>
                </Col>
                <Col lg='2' md='3'>
                    <h2 className='d-flex align-items-center gap-1'><i class="ri-linkedin-box-fill"></i>LinkedIn</h2>
                </Col>
                
            </Row>
         </Container>
}
 
export default Company;