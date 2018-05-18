import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return (
            <Fragment>
                <Link className="btn btn-lg mt-3 ml-2 text-white" to="/logout">Logout</Link>
                <Link className="btn btn-lg mt-3 ml-2 text-white" to="/">Home</Link>
                <Link className="btn btn-lg mt-3 ml-2 text-white" to="/write">Write</Link>
            </Fragment>
        )

    } else {
        return (
            <Fragment>
                <Link className="btn btn-lg mt-3 ml-2 text-white" to="/login">Login</Link>
                <Link className="btn btn-lg mt-3 ml-2 text-white" to="/signup">Signup</Link>
                <Link className="btn btn-lg mt-3 ml-2 text-white" to="/">Home</Link>

            </Fragment>
        )
    }
};

export default AuthButton;