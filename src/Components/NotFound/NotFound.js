import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='text-center py-5 text-danger  notFound'>
            <h2>SORRY, MODULE NOT FOUND</h2>
            <li className="nav-item">
                <NavLink
                    to="/home"
                    style={{
                        color: "rgb(238, 75, 105)",
                        fontSize: "16px",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        width: "30%",
                        margin: "0 auto",
                        border: '1px solid rgb(238, 75, 105)'
                    }}
                    className="nav-link nav-NavLink active "
                >
                    Back To  Home
                </NavLink>
            </li>
        </div>
    );
};

export default NotFound;