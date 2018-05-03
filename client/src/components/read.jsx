import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";


class Read extends Component {
    constructor(props) {
        super(props);
        this.state = { blogs: [] };
        // console.log(props.match.params.id);
        this.urlid = props.match.params.id;
    }
    componentDidMount() {
        const url = `/api/blog/${this.urlid}`;

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                // console.log(result);
                this.setState({ blogs: result });
                console.log(this.state.blogs.id);
            })
            .catch((error) => console.log('Error'));
    }

    render() {
        // console.log(this.props);

        return (
            <div>
                <div className="mt-3 ml-3"><Link to="/"><button type="button" className="btn btn-dark btn-lg">View All Blogs</button></Link></div>
                <div className='d-flex flex-column justify-content-center bg-secondary customMargin' id='heightID'>
                    <div className='display-4 text-center height100'>{this.state.blogs.title}</div>
                    <div className='text-center height500'>{this.state.blogs.content}</div>
                    </div>
                </div>
            
        )
    }
}

export default Read;
