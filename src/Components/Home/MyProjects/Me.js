import React from 'react';
import me from '../../../images/profile-pic (2).png'
import './Me.css'


function Me() {
    return (
        <div id="me">
            <h1 style={{ color: 'rgb(238 75 105)', textTransform: 'uppercase' }} className='text-center mt-5 '>About Me</h1>

            <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">

                <div className="row container mx-auto p-5 my-5 align-items-center" >
                    <div className="col-md-7 mx-auto">

                        <h2><span style={{ color: 'rgb(238 75 105)', textTransform: 'uppercase' }}>Muhammod</span>  MUHIBULLAH MUHSIN</h2>
                        I am a MERN-Stack WEB Developer.Currently I'm working with React, Node.js,Express.js and MongoDB. I also have experience  in HTML5, CSS3 and JavaScript (ES6). I am a quick learner. I believe in hard work and efficiency. That's why I am always ready to accomplish any task by working hard. I always focus on learning new technology...
                        <div style={{ color: 'rgb(238 75 105)', textTransform: 'uppercase' }} className='my-2'>
                            <p><i class="fas fa-calendar-week"></i> : 15 June 2004</p>
                            <p><i class="fas fa-map-marker-alt"></i> : Raynagar,DoptoriPara,Mirabazar,Sylhet, Bangladesh</p>
                            <p><i class="fas fa-mobile-alt"></i> : +880111189898</p>
                        </div>
                        <div className="row">
                            <h3>Technologies <span style={{ color: 'rgb(238 75 105)', textTransform: 'uppercase' }}> I used recently</span></h3>
                            <div className="col-md-6 aboutMe">

                                <ul>

                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>BOOTSTRAP</li>
                                    <li>JavaScript Es6</li>
                                    <li>TAILWIND CSS</li>
                                    <li>REACT JS</li>
                                </ul>

                            </div>
                            <div className="col-md-6 aboutMe">
                                <ul>
                                    <li>Material UI</li>
                                    <li>REACT ROUTER</li>
                                    <li>REACT HOOK FORM</li>
                                    <li>NODE JS</li>
                                    <li>MONGODB</li>
                                    <li>EXPRESS JS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mx-auto">

                        <img src={me} class='img-fluid ' alt="" />

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Me;