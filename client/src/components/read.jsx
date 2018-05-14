import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import ReadToggle from './readToggle';
import * as blogService from '../services/blog';

// import CreatedBy from './createdBy';



class Read extends Component {
    constructor(props) {
        super(props);
        this.state = { blogs: {} };
        // console.log(props.match.params.id);
        this.id = props.match.params.id;
    }

    componentWillMount() {
        let id = `${this.id}`;

        blogService.one(id)
            .then((result) => {
                this.setState({ blogs: result });
                console.log(this.state.blogs);
            })
            .catch((error) => console.log('Error'));
    }

    render() {
        return (
            <div>
                <div className='d-flex justify-content-center align-items-center mt-3'>
                <ReadToggle blogid={this.id} authorid={this.state.blogs.authorid} />
                </div>
                <div className='d-flex flex-column justify-content-center readColor customMargin' id='heightID'>
                    <div className='display-4 text-center height100'>{this.state.blogs.title}</div>
                    {/* <CreatedBy timestamp={this.state.blogs._created} authorid={this.state.blogs.authorid} /> */}
                    <div className='text-center height500 wordBreak'>{this.state.blogs.content}</div>
                </div>
            </div>
            
        )
    }
}

export default Read;
