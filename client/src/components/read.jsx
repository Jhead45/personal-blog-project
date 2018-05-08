import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import * as blogService from '../services/blog';



class Read extends Component {
    constructor(props) {
        super(props);
        this.state = { blogs: [] };
        // console.log(props.match.params.id);
        this.id = props.match.params.id;
    }
    componentDidMount() {
        let id = `${this.id}`;

        blogService.one(id)
            .then((result) => {
                // console.log(result);
                this.setState({ blogs: result });
                // console.log(this.state.blogs.id);
            })
            .catch((error) => console.log('Error'));
    }

    render() {
        // console.log(this.props);

        return (
            <div>
                <div className="mt-3 ml-3 text-center">
                <Link to="/"><button type="button" className="btn btn-dark btn-lg mr-3">View All Blogs</button></Link>
                <Link to={`/edit/${this.id}`}><button type="button" className="btn btn-dark btn-lg mr-3">Edit Blog</button></Link>
                <Link to={`/delete/${this.id}`}><button type="button" className="btn btn-dark btn-lg">Delete Blog</button></Link>

                </div>
                <div className='d-flex flex-column justify-content-center readColor customMargin' id='heightID'>
                    <div className='display-4 text-center height100'>{this.state.blogs.title}</div>
                    <div className='text-center height500 wordBreak'>{this.state.blogs.content}</div>
                    </div>
                </div>
            
        )
    }
}

export default Read;
