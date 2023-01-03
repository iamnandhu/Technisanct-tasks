import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import illustration2 from '../../assets/Illustration-2.png'
import './centersection.css'


const CenterSection = () => {
  return <section>
            <Container>
                <Row>

                    <Col lg='6' md='6'>
                        <div className="center-content">
                            <h2>Search and find <br />your best courses <br/> the easy way </h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptatem dolorum earum perspiciatis maiores maxime corporis at ea amet ut<br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, sit? Velit enim magni placeat a. </p>
                        </div>
                            <div className="buttons">
                                <span><button className='join btn btn-primary'>Join us now!</button></span>
                                <span><button className='see-plans btn'>See all plans</button></span>
                            </div>
                            
                        
                    </Col>

                    <Col lg='6' md='6' className='illus-1'>
                        <img src={illustration2} alt="" className='w-100'/>
                    </Col>
                </Row>
            </Container>
         </section>
}

export default CenterSection