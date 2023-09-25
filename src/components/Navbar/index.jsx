import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const index = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        // Update the current time every second
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand text-warning"><span className='text-dark'>D</span>|| System</span>
                <NavLink className="nav-link" to="/">
                    Home
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <span className="nav-link">
                                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">
                                Working Time: 10:00 - 19:00
                            </span>
                        </li>
                        <li className="nav-item">
                            {isAuthenticated ? (
                                <NavLink className="nav-link" to="/my-account">
                                    My Account
                                </NavLink>
                            ) : (
                                <NavLink className="nav-link" to="/login">
                                    Login
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default index;



