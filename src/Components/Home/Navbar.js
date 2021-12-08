import React from 'react';
import logo from '../../images/logo.png'
import resume from '../../resume/Muhibullah Muhsin resume 2022 (1).pdf'
import './Navbar.css'

const Navbar = () => {
    const NavbarStyle = { color: 'rgb(238, 75, 105)' }
    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-dark navBarBg">
                <div class="container-fluid">
                    <a class="navbar-brand " href="#home">
                        <img src={logo} alt="" width="80" height="auto" class="d-inline-block align-text-center mx-3" />
                        <strong> MUHSIN</strong>
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a style={NavbarStyle} class="nav-link activeStyle" aria-current="page" href="#home">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a style={NavbarStyle} class="nav-link activeStyle" aria-current="page" href="#project">PROJECTS</a>
                            </li>
                            <li class="nav-item">
                                <a style={NavbarStyle} class="nav-link activeStyle" aria-current="page" href="#contact">CONTACT ME</a>
                            </li>
                            <li class="nav-item">
                                <a style={NavbarStyle} class="nav-link activeStyle" aria-current="page" href="#review">Review </a>
                            </li>


                        </ul>
                        <div class="d-flex ms-1">
                            <a href={resume} download='Muhsin_resume'><i class="fas fa-download"></i> Dowload My Resume</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;