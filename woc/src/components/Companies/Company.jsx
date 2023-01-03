import React from 'react'
import {Container,Row,Col} from 'reactstrap'


export const Company = () => {
  return <section>
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
         </section>
}
 
export default Company;