import React from 'react';
import ContactMe from '../ContactMe';
import AboutMe from './MyProjects/AboutMe';
import Me from './MyProjects/Me';
import Projects from './MyProjects/Projects';
import Review from './Review';

const Home = () => {
    return (
        <div className='mx-auto'>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Me></Me>
            <Review></Review>
            <ContactMe></ContactMe>

        </div>
    );
};

export default Home;