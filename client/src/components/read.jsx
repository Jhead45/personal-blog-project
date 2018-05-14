import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import ReadToggle from './readToggle';
import * as blogService from '../services/blog';
import moment from 'moment';



class Read extends Component {
    constructor(props) {
        super(props);
        this.state = { blogs: {} };
        // console.log(props.match.params.id);
        this.id = props.match.params.id;
    }



    componentDidMount() {

        let id = `${this.id}`;

        blogService.findAuthor(id)
            .then((result) => {
                console.log(result);
                this.setState({ blogs: result });
            })
            .catch((error) => console.log('Error'));
    }

    getDateTime() {
        let time = this.state.blogs._created;
        let formattedDate = moment(`${time}`).utc().format("dddd, MMMM Do, h:mm A")
        return formattedDate;

    }

    render() {
        return (
            <div>
                <div className='d-flex justify-content-center align-items-center mt-3'>
                <ReadToggle blogid={this.id} authorid={this.state.blogs.authorid} />
                </div>
                <div className='d-flex flex-column justify-content-center readColor customMargin' id='heightID'>
                    <div className='display-4 text-center height100'>
                    {this.state.blogs.title}</div>
                    <div className='height500 wordBreak'>
                    <p>Written By: {this.state.blogs.name} on {this.getDateTime()}</p>

                    {this.state.blogs.content}</div>
                </div>
            </div>
            
        )
    }
}

export default Read;
