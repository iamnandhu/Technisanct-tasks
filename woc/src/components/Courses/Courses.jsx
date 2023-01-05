import React from 'react';
import './courses.css'
import * as Icon from 'react-bootstrap-icons';

const Courses = () => {
    
  return <section>
            <div className="course-container">
                <h1>Our best courses for you</h1>
                <div className="card-container">
                    <div className="card">
                        <Icon.Phone size={30} color={'#1B1AFF'} className="icons"/>
                        <h3>Product Designer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nobis mollitia eius vero aliquam tempora maiores inventore consequatur atque facilis.</p>
                        <button className='course-btn'>Learn more</button>
                    </div>
                    <div className="card">
                        <Icon.Display size={30} color={'#1B1AFF'} className="icons"/>
                        <h3>Front-end Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nobis mollitia eius vero aliquam tempora maiores inventore consequatur atque facilis.</p>
                        <button className='course-btn'>Learn more</button>
                    </div>
                    <div className="card">
                        <Icon.PcDisplayHorizontal size={30} color={'#1B1AFF'} className="icons"/>
                        <h3>Back-end Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nobis mollitia eius vero aliquam tempora maiores inventore consequatur atque facilis.</p>
                        <button className='course-btn'>Learn more</button>
                    </div>
                    <div className="card">
                        <Icon.HandThumbsUp size={30} color={'#1B1AFF'} className="icons"/>
                        <h3>Digital Marketing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nobis mollitia eius vero aliquam tempora maiores inventore consequatur atque facilis.</p>
                        <button className='course-btn'>Learn more</button>
                    </div>
                    <div className="card">
                        <Icon.FileCode size={30} color={'#1B1AFF'} className="icons"/>
                        <h3>Data Science</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nobis mollitia eius vero aliquam tempora maiores inventore consequatur atque facilis.</p>
                        <button className='course-btn'>Learn more</button>
                    </div>
                    <div className="card">
                        <Icon.FileBarGraph size={30} color={'#1B1AFF'} className="icons"/>
                        <h3>Prodduct Management</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nobis mollitia eius vero aliquam tempora maiores inventore consequatur atque facilis.</p>
                        <button className='course-btn'>Learn more</button>
                    </div>
                </div>
            </div>
  </section>
}

export default Courses