import React from 'react'
import './footer.css'
import logo from '../../assets/WOC.png'

const Footer = () => {
  return (
    <div className='main-container'>
        <div className="footer-container">
            <div className="row">
                
                <div className="col">
                    <div className="logo-footer">
                        <img src={logo} alt="" />
                    </div>
                    <div className='logo-text'>
                        <p className='test-logo'>World<br/>Online<br/>Course</p>
                    </div>
                </div>

                <div className='col'>
                    <p>Technology Inc.<br/>90B Wherever Street<br/>99122 Indonesia</p>
                </div>

                <div className='col'>
                    <p>+1 234 778 991<br/><u>hello@woc.com</u></p>
                </div>

                <div className="col">
                    <p><u>FAQ<br/>About Us<br/>Command Center</u></p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Footer 
