import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import * as blogService from '../services/blog';
import { checkName } from '../services/user';
import { isLoggedIn } from '../services/user';



class ShowUser extends Component {
    constructor(props) {
        super(props);
        this.state = { author: [] };
      
    }

    componentDidMount() {
        checkName()
        .then((res) => {
          this.setState({ author: [res] });
          console.log(this.state.author);
        })
        .catch((err) => {
          console.log(err);
        })
      }

    render() {

        if (isLoggedIn()) {
            return (
                <div className='d-flex flex-row justify-content-end mr-1'>
                    <div className='user mt-1'>
                        <p>>Welcome {this.state.author}! <span className='ml-2'><Link className="" to="/logout">(not you?)</Link>
                            </span>
                        </p>
                    </div>
                </div>)

        } else {
            return (
                <div />
            )
        }

        
    }
}

export default ShowUser;
