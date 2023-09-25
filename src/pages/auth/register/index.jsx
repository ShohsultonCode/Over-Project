import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Server from '../../../API';
import { useDispatch } from 'react-redux';
import { setregisterData } from '../../../stories/register';
import { toast, ToastContainer } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false); // Remove initial loading state
    const [formData, setFormData] = useState({
        user_first_name: '',
        user_last_name: '',
        user_username: '',
        user_password: '',
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const responseData = await Server.register(formData);
            dispatch(setregisterData(responseData));

            // Check the response for success or error

            if (responseData.statusCode === 201) {
                // Registration successful
                localStorage.setItem('accessToken', responseData.accessToken);
                toast.success('Registration successful! You can now log in.');
                navigate('/my-account'); // Redirect to login page
            } else {
                // Registration failed
                toast.error('Registration failed. Please try again.');
            }
        } catch (error) {
            console.log(error);
            toast.error('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <ToastContainer />
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-body">
                        <h5 className="card-title text-center">Create Your Account</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="user_first_name" className="form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="user_first_name"
                                    name="user_first_name"
                                    placeholder="Enter your first name"
                                    value={formData.user_first_name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="user_last_name" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="user_last_name"
                                    name="user_last_name"
                                    placeholder="Enter your last name"
                                    value={formData.user_last_name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="user_username" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="user_username"
                                    name="user_username"
                                    placeholder="Enter your username"
                                    value={formData.user_username}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="user_password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="user_password"
                                    name="user_password"
                                    placeholder="Enter your password"
                                    value={formData.user_password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">
                                    Remember me
                                </label>
                            </div>
                            <div className="d-grid">
                                <button type="submit" id="button-attempts" className="btn btn-warning btn-lg btn-block">
                                    {isLoading ? 'Registering...' : 'Register'}
                                </button>
                            </div>
                            <div className="text-center mt-3">
                                <NavLink to="/forgot-password" className="link-primary">
                                    Forgot password?
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;
