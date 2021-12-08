import React from 'react';
import './Footer.css'
const Footer = () => {


    return (
        <div class='text-center mx-auto Footer p-5 mt-5 text-light'>
            <div class='text-center m-2'>
                <a href='https://www.facebook.com/muhammod.muhsin'>
                    <i class="fab fa-facebook-f"></i> </a>

                <a href="https://www.linkedin.com/in/muhammod-muhibullah-muhsin/"> <i class="fab fa-linkedin-in"></i></a>

                <a href="https://github.com/muhsin545"> <i class="fab fa-github"></i></a>
                <a href="https://www.instagram.com/muhibullahmuhsin5455/"><i class="fab fa-instagram"></i></a>
                <a href="mailto:muhibullahmuhsin545@gmail.com"> <i class="fas fa-envelope"></i></a>

                <a href="https://twitter.com/programminghero"><i class="fab fa-twitter"></i></a>
            </div>
            <div class='container'>

                <h6>Designed and Developed by Muhammod Muhibullah Muhsin</h6>
                <p><small>Copyright &copy; 2021, All Rights Reserved</small></p>
            </div>
        </div >
    );
};

export default Footer;