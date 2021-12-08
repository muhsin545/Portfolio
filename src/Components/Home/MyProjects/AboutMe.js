import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import banner from '../../../images/3323617-ai.png'
import './AboutMe.css'
import resume from '../../../resume/Muhibullah Muhsin resume 2022 (1).pdf'




const AboutMe = () => {



    return (
        <>
            <div id="home" className="row container mx-auto align-items-center p-5">
                <div className="col-md-7 ">
                    <div>
                        <h1><span className="hi">Hi ,This is</span> </h1>
                        <h2>MUHAMMOD MUHIBULLAH MUHSIN</h2>
                    </div>
                    <h1 style={{ padding: '2px', margin: 'auto 0', fontWeight: 'bold' }}>

                        <span style={{ color: 'rgb(238, 75, 105)', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['MERN-Stack Developer!', 'Javascript Developer!', 'React-Developer!', 'Front-end Developer!']}
                                loop={3}
                                cursor
                                cursorStyle='💻'
                                typeSpeed={120}
                                deleteSpeed={70}
                                delaySpeed={1500}


                            />
                        </span>
                    </h1>
                    <p>A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.</p>
                    <a href={resume} download="Muhsin_resume" class='btn border-0 px-3 py-2 rounded-2 button'><i class="fas fa-download"></i>  Dowload Resume</a>
                </div>
                <div className="col-md-5">
                    <img src={banner} alt="" className="img-fluid" />
                </div>
            </div>


        </>
    );
};

export default AboutMe;




