import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/profile-pic (2).png'
import resume from '../../resume/Muhibullah Muhsin resume 2022 (1).pdf'
import './Navbar.css'

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg border-0 navBarBg   navbar-light">
                <div className="container">
                    <NavLink to="/">
                        <img src={logo} width="50px" className="rounded-circle " alt="" />
                    </NavLink> <span className="text-danger fs-5 fw-bold ms-2">MUHSIN</span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <NavLink
                                    to="/home"
                                    style={{
                                        color: "rgb(238, 75, 105)",
                                        fontSize: "16px",
                                        textTransform: "uppercase",
                                        fontWeight: "bold",
                                        fontFamily: "Poppins"
                                    }}
                                    className="nav-link nav-NavLink active "
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    style={{
                                        color: "rgb(238, 75, 105)",
                                        fontSize: "16px",
                                        textTransform: "uppercase",
                                        fontWeight: "bold",
                                        fontFamily: "Poppins"
                                    }}
                                    className="nav-link  nav-NavLink active"
                                    to="/blogs"
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/project"
                                    style={{
                                        color: "rgb(238, 75, 105)",
                                        fontSize: "16px",
                                        textTransform: "uppercase",
                                        fontWeight: "bold",
                                        fontFamily: "Poppins"
                                    }}
                                    className="nav-link nav-NavLink active "
                                >
                                    My Projects
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    style={{
                                        color: "rgb(238, 75, 105)",
                                        fontSize: "16px",
                                        textTransform: "uppercase",
                                        fontWeight: "bold",
                                        fontFamily: "Poppins"
                                    }}
                                    className="nav-link  nav-NavLink active"
                                    to="/review"
                                >
                                    Review
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/me"
                                    style={{
                                        color: "rgb(238, 75, 105)",
                                        fontSize: "16px",
                                        textTransform: "uppercase",
                                        fontWeight: "bold",
                                        fontFamily: "Poppins"
                                    }}
                                    className="nav-link nav-NavLink active "
                                >
                                    About Me
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    style={{
                                        color: "rgb(238, 75, 105)",
                                        fontSize: "16px",
                                        textTransform: "uppercase",
                                        fontWeight: "bold",
                                        fontFamily: "Poppins"
                                    }}
                                    className="nav-link  nav-NavLink active"
                                    to="/contact"
                                >
                                    Contact Me
                                </NavLink>
                            </li>

                            <div class="d-flex ms-1 resume">
                                <a style={{
                                    color: "rgb(238, 75, 105)",
                                    fontSize: "16px",
                                    textTransform: "uppercase",
                                    fontWeight: "bold",
                                    fontFamily: "Poppins"
                                }}
                                    href={resume} download='Muhsin_resume'><i class="fas fa-download"></i> Dowload My Resume</a>
                            </div>


                        </ul>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default Navbar;