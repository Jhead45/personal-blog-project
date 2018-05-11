import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import * as userService from '../services/user';

class ReadToggle extends Component {
    constructor(props) {
        super(props);
        this.state = { userid: ""};
    }
    componentDidMount() {
        userService.checkUser()
        .then((res) => {
          this.setState({ userid: res });
        })
        .catch((err) => {
          console.log(err);
        })
    }  
      
    render() {
        let blogid = this.props.blogid;
        console.log(this.props.authorid);
        if (this.props.authorid === this.state.userid) {
             return (
                <Fragment>
                    <Link className="btn btn-dark btn-lg mr-3 text-white" to={`/edit/${blogid}`}>Edit Blog</Link>
                    <Link className="btn btn-dark btn-lg mr-3 text-white" to={`/delete/${blogid}`}>Delete Blog</Link>
                </Fragment>
              )           
        } else {
            return (
                <div />
            )
        }
    }
}

export default ReadToggle;