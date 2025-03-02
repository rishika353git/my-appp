import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../src/assets/Logo.png"

const Login = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    const navigate = useNavigate(); // Initialize navigate function

    const handleSignIn = () => {
        // Add authentication logic here if needed
        navigate("/home"); // Navigate to the dashboard page
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
            <div className="text-center mb-4">
                <img src={logo} alt="Logo" className="mb-2" />
            </div>
            <h2 className="text-center">Sign in to your account</h2>
            <p className="text-center"> Or
                <a href="#" style={{ color: '#BE6E02', textDecoration: 'none' }}> create a new account</a>
            </p>
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <input type="email" className="form-control mb-3" placeholder="Email address" />
                <input type="password" className="form-control mb-3" placeholder="Password" />
                <div className="d-flex justify-content-between mb-3">
                    <div>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe" className="ms-2">Remember me</label>
                    </div>
                    <a href="#" style={{ color: '#BE6E02', textDecoration: 'none' }}>Forgot your password?</a>
                </div>
                <button className="btn w-100" style={{ backgroundColor: '#BE6E02', color: 'white' }} onClick={handleSignIn}>
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Login;
