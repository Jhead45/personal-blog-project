import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return <Link className="btn btn-dark btn-lg mt-3 ml-3 text-white" to="/logout">Logout</Link>
    } else {
        return (
            <Fragment>
                <Link className="btn btn-dark btn-lg mt-3 ml-3 text-white" to="/login">Login</Link>
                <Link className="btn btn-dark btn-lg mt-3 ml-3 text-white" to="/signup">Signup</Link>
            </Fragment>
        )
    }
};

export default AuthButton;