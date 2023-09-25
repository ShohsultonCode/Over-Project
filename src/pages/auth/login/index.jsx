import React from 'react';
import { NavLink } from 'react-router-dom';
const index = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center">Login Your Account</h5>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your username"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="rememberMe"
                                />
                                <label className="form-check-label" htmlFor="rememberMe">
                                    Remember me
                                </label>
                            </div>
                            <div className="d-grid">
                                <button
                                    type="submit"
                                    id='button-attempts'
                                    className="btn btn-warning btn-lg btn-block"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="text-center mt-3">
                                <NavLink to="/register" className="link-primary liststyle-none">
                                    If you don't have account Register
                                </NavLink>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
