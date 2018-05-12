import React, { Component } from 'react';
import { render } from 'react-dom';
import * as blogService from '../services/blog';


class Delete extends Component {
    constructor(props) {
        super(props);
  
        this.id = this.props.blogid;
    }

    componentDidMount() {
        let id = `${this.id}`;

        if(this.props.userid === this.props.authorid) {
            blogService.destroy(id)
            .then((result) => {
                console.log('Delete Success!');
            }).catch((err) => {
                console.log(err);
            });    
        }     
    }

    render() {

        return (
        <div className='welcomeP'>
            <h1>You have succesfully Deleted Your Post!</h1>
            <p>When you leave this page you will be unable to return.</p>
        </div>)
    }
}

export default Delete;
