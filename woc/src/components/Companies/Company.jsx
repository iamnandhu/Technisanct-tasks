import React from 'react'
import {Row,Col} from 'reactstrap'
import './company.css'
import compny1 from '../../assets/cmpny-1.png'
import compny2 from '../../assets/cmpny-2.png'
import compny3 from '../../assets/cmpny-3.png'
import compny4 from '../../assets/cmpny-4.png'
import compny5 from '../../assets/cmpny-5.png'
import uni1 from '../../assets/uni-1.png'
import uni2 from '../../assets/uni-2.png'
import uni3 from '../../assets/uni-3.png'
import uni4 from '../../assets/uni-4.png'
import uni5 from '../../assets/uni-5.png'


export const Company = () => {
  return <div className='companyContainer'>
            <Row> 
                <h1 className='colab'>Collaborate with 100+ leading universities and comapnies</h1>
                <p className='colab2'>WOC has contributed to students so that they can work in their dream company,<br/> we will continue to stick to our commitment to create an advanced generation,</p>
            </Row>
           
            <Row className='cmpnyRow'>
                <Col lg='2' md='3'>
                    <img className='cmpny1' src={compny1} alt=''/>
                </Col>
                <Col lg='2' md='3'>
                    <img className='cmpny2' src={compny2} alt=''/>
                </Col>
                <Col lg='2' md='3'>
                    <img className='cmpny3' src={compny3} alt=''/>
                </Col>
                <Col lg='2' md='3'>
                    <img className='cmpny4' src={compny4} alt=''/>
                </Col>
                <Col lg='2' md='3'>
                    <img className='cmpny5' src={compny5} alt=''/>
                </Col>
            </Row>  
            <Row className='uniRow'>
                <Col lg='2' md='3'>
                    <img className='uni1' src={uni1} alt=''/>
                </Col>
                <Col lg='2' md='3'>
                    <img className='uni2' src={uni2} alt=''/>
                </Col>
                <Col lg='2' md='3'>
                    <img className='uni3' src={uni3} alt=''/>
                </Col>
                <Col lg='2' md='3'>
                    <img className='uni4' src={uni4} alt=''/>
                </Col>
                <Col lg='2' md='3'>
                    <img className='uni5' src={uni5} alt=''/>
                </Col>
            </Row>
         </div>
}
 
export default Company;