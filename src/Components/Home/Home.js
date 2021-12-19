import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';
import ContactMe from '../ContactMe';
import AboutMe from './MyProjects/AboutMe';
import Me from './MyProjects/Me';
import Projects from './MyProjects/Projects';
import Review from './Review';

const Home = () => {
    return (

        <div>
            <MessengerCustomerChat
                pageId="<100076308156419>"
                appId="<2091632844325528>"
            />
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Me></Me>
            <Review></Review>
            <ContactMe></ContactMe>

        </div>
    );
};

export default Home;