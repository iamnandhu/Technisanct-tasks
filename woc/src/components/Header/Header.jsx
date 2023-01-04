import React,{useRef} from 'react';
import { Container } from 'reactstrap';
import './header.css'
import wocImage from '../../assets/WOC.png'


const navLinks = [
{
    display:'Home',
    url:'#'
},
{
    display:'Courses',
    url:'#'
},
{
    display:'About',
    url:'#'
},
{
    display:'FAQ',
    url:'#'
},
{
    display:'Blog',
    url:'#'
}
]

const Header = () => {

 const menuRef = useRef()
 const menuToggle = () => menuRef.current.classList.toggle('active_menu')

  return <header className='header'>
            <Container>
                <div className='navigation d-flex align-items-center justify-content-between'>
                    <div className='logo'>
                      <img src={wocImage}alt=''/><h2 className='d-lex align-items-center'>World <br/> Online<br/> Course</h2>
                    </div>

                    <div className="d-flex align-items-center justify-content-between gap-5">
                        <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
                            <ul className="nav_list">

                            {
                                navLinks.map((item,index)=>(
                                    <li key={index} className='nav_item '>
                                        <a href={item.url} className=''>{item.display}</a>
                                    </li>
                                ))
                            }
                                                        
                           <li className='nav_item'>
                                <button className='login btn btn-outline-dark'>Login</button><button className='signup btn btn-dark '>Sign Up</button>

                           </li>                         
                            </ul>
                            
                        </div>
                        

                    </div>
                    <div className="mobile_menu">
                        <span><i class='ri-menu-line' onClick={menuToggle}></i></span>
                    </div>
                </div>
            </Container>
        </header> 
}

export default Header