import React from 'react'
import './testimonial.css';
import * as Icon from 'react-bootstrap-icons';
import img from '../../assets/man.png'


const Testimonial = () => {

  

  return <section>
            <div className="testimonial-container">
                <div className='testimonial-left'>
                    <Icon.Quote size={70} color={'#1b1aff'} />
                    <h2>What they say<br/>about WOC</h2>
                    <p>More than 3000 user have been helbed by<br/>World Online Course</p>
                </div>
                
                <div className="testimonial-right">
                                <p className='what-say'>What they say</p>
                                <h2>“Studying at WOC is fun, the curriculum is complete,<br/> the instructors are competent, and the assignments<br/> given are also relevant to the current scope of work.”</h2>
                                <div>
                                    <div className='author-img'>
                                        <img src={img} alt="" />
                                    </div>
                                    <div className='author-info'>
                                        <div className='author-name'>
                                            <h5>Resky Fernandes</h5>
                                            <p>Product Manager</p>
                                        </div>
                                        <div className='arrow-icons'>
                                            <Icon.ArrowLeftCircle className='arrow1' size={30}/><Icon.ArrowRightCircle className='arrow2' size={30}/>
                                        </div>
                                    </div>
                                </div>
                </div>                       
            </div>
         </section>
                
            

}

export default Testimonial