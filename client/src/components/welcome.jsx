import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";


const Welcome = props => {



    return (
            <div className='welcomeP'>
                <h1>Welcome to Blog Spot!</h1>
                <p>Thank you for signing up!</p>
                <p>Return Home to login and begin posting!</p>
                <Link to="/"><button type="button" className="text-center btn btn-dark btn-lg mt-2">Go Home</button></Link>
            </div>


    );
};

export default Welcome;