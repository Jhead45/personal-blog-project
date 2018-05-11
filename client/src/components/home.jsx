import React, { Component } from 'react';
import { render } from 'react-dom';
import List from './list';
import Write from './write';
import { Link } from "react-router-dom";
import * as blogService from '../services/blog';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { blogs: [] };
    }
    componentDidMount() {
        const url = '/api/blog';

        blogService.all(url)
            .then((result) => {
                // console.log(result);
                this.setState({ blogs: result });
                // console.log(this.state.blogs[0]);
                // console.log(this.state.blogs[0].id);
            })
            .catch((error) => console.log('Error'));
    }

    render() {
        return (
            <div>
                <div className='display-1' id='pageTitle'>Blog Spot</div>
                <div className="d-flex justify-content-center">
                    <table className="table w-75 table-secondary">
                        <tbody>
                            {this.state.blogs.map((blog) => (
                                <List key={blog.id} value={blog} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Home;
