import React from 'react'
import './commit.css'
import img2 from '../../assets/Illustration-1.png'

const Commit = () => {
  return <div className='commit-container'>
            <div className='commit-img'><img src={img2} alt="" /></div>
            <div className='commit-text'>
                <h1 >We are committed<br/>
to helping you in the<br/> process of achieving<br/> your dreams</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> error. Eveniet libero sint quidem incidunt numquam ut,<br/> optio soluta, corrupti accusantium volupt<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='commit-btn'>See details</button>
            </div>
        </div>
}

export default Commit