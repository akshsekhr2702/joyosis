"use client";

import Register from "../components/Register"
import React, { useState } from "react";
import './loginstyle.css'
import { useForm } from "react-hook-form";
import Login from "../components/Login";

export default function LoginPage() {
    const { register, handleSubmit, reset} = useForm()
    const [containerClass, setContainerClass] = useState('');

    const handleRegisterClick = () => {
        setContainerClass('active');
    };

    const handleLoginClick = () => {
        setContainerClass('');
    };

    return (
        <div className={`container ${containerClass}`} id="container">
            <div className="form-container sign-up">
            <Register />
            </div>
            <div className="form-container sign-in">
            <Login />
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="bg-green-500" id="login" onClick={handleLoginClick}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="bg-blue-600" id="register" onClick={handleRegisterClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

