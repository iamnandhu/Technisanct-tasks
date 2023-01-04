import React from 'react'
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
  return <div className='partner-container'>
            <div className='partner-text'> 
                <h1 className='divab1'>Colaborate with 100+ leading universities and comapnies</h1>
                <p className='divab2'>WOC has contributed to students so that they can work in their dream company,<br/> we will continue to stick to our commitment to create an advanced generation,</p>
            </div>
           
            <div className='second-container'>
           
                <div>
                    <img className='cmpny1' src={compny1} alt=''/>
                </div>
                <div>
                    <img className='cmpny2' src={compny2} alt=''/>
                </div>
                <div>
                    <img className='cmpny3' src={compny3} alt=''/>
                </div>
                <div>
                    <img className='cmpny4' src={compny4} alt=''/>
                </div>
                <div>
                    <img className='cmpny5' src={compny5} alt=''/>
                </div>
                <div>
                    <img className='uni1' src={uni1} alt=''/>
                </div>
                <div>
                    <img className='uni2' src={uni2} alt=''/>
                </div>
                <div>
                    <img className='uni3' src={uni3} alt=''/>
                </div>
                <div>
                    <img className='uni4' src={uni4} alt=''/>
                </div>
                <div>
                    <img className='uni5' src={uni5} alt=''/>
                </div>
            
            </div> 
         </div>
}
 
export default Company;