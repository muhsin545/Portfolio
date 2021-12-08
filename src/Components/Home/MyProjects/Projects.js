import React from 'react';
import assignment12 from '../../../images/assignment-12.png'
import assignment11 from '../../../images/assignment-11.png'
import assignment10 from '../../../images/assignment-10.png'
import './Projects.css'

const Projects = () => {
    return (
        <div className='my-5 pt-3' id='project'>
            <h1 style={{ color: 'rgb(249, 0, 77)', textTransform: 'uppercase' }} className='text-center my-3 '>My Recent Projects</h1>
            <div className="row container mx-auto">

                <div className="col-md-4 mx-auto ">
                    <div className='preview'>
                        <div className="previewimg"></div>
                    </div>
                    <div className='bg-dark p-3 w-100'>
                        <h4>The Car</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti nihil dignissimos unde culpa omnis repellendus delectus accusantium tempore modi, earum, placeat voluptates error ipsam ea magnam natus iure quia!</p>

                        <div>
                            {/* <span className=" px-2 py-1">React</span>
                            <span className=" px-2 py-1">Firebase authentication</span>
                            <span className=" px-2 py-1">Bootstrap</span>
                            <span className=" px-2 py-1">MongoDB</span>
                            <span className=" px-2 py-1">Express.js</span>
                            <span className=" px-2 py-1">Node.js</span> */}
                        </div>
                        <a className='button p-2 mx-2' href="https://hero-honda-8272c.web.app/">Live Link</a>
                        <a className='button p-2 mx-2' href='https://github.com/muhsin545/The-Car-server'>GitHub</a>
                    </div>

                </div>
                <div className="col-md-4 mx-auto ">
                    <div className='preview2'>
                        <div className="previewimg2"></div>
                    </div>
                    <div className='bg-dark p-3 w-100'>
                        <h4>Travellers</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti nihil dignissimos unde culpa omnis repellendus delectus accusantium tempore modi, earum, placeat voluptates error ipsam ea magnam natus iure quia!</p>

                        <div>
                            {/* <span className=" px-2 py-1">React</span>
                            <span className=" px-2 py-1">Firebase authentication</span>
                            <span className=" px-2 py-1">Bootstrap</span>
                            <span className=" px-2 py-1">MongoDB</span>
                            <span className=" px-2 py-1">Express.js</span>
                            <span className=" px-2 py-1">Node.js</span> */}
                        </div>
                        <a className='button p-2 mx-2' href="https://travelers-d5c96.web.app/">Live Link</a>
                        <a className='button p-2 mx-2' href='https://github.com/muhsin545/Tourism-client'>GitHub</a>
                    </div>

                </div>
                <div className="col-md-4 mx-auto ">
                    <div className='preview3'>
                        <div className="previewimg3"></div>
                    </div>
                    <div className='bg-dark p-3 w-100'>
                        <h4>Health Care</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti nihil dignissimos unde culpa omnis repellendus delectus accusantium tempore modi, earum, placeat voluptates error ipsam ea magnam natus iure quia!</p>

                        <div>
                            {/* <span className=" px-2 py-1">React</span>
                            <span className=" px-2 py-1">Firebase authentication</span>
                            <span className=" px-2 py-1">Bootstrap</span>
                            <span className=" px-2 py-1">MongoDB</span>
                            <span className=" px-2 py-1">Express.js</span>
                            <span className=" px-2 py-1">Node.js</span> */}
                        </div>
                        <a className='button p-2 mx-2' href="https://health-care-ed6e1.firebaseapp.com/">Live Link</a>
                        <a className='button p-2 mx-2' href='https://github.com/muhsin545/Health-Care'>GitHub</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;