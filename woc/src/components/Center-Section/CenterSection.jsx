import React from 'react';

import illustration2 from '../../assets/Illustration-2.png'
import './centersection.css'


const CenterSection = () => {
  return <section>
            <div className="center-container row">
                <div className='center-text col'>
                    <h2>Search and find <br />your best courses <br/> the easy way </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>Ipsa voluptatem dolorum earum perspiciatis maiores<br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    <div className="center-btn">
                        <span><button className='join btn btn-primary'>Join us now!</button></span>
                        <span><button className='see-plans btn'>See all plans</button></span>
                    </div>
                </div>
                <div className='center-img '>
                    <img src={illustration2} alt="" className='img img-responsive'/>
                </div>
                
            </div>
         </section>
}

export default CenterSection