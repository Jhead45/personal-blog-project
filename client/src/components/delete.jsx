import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import * as blogService from '../services/blog';


class Delete extends Component {
    constructor(props) {
        super(props);
  
        this.id = this.props.match.params.id;
    }

    componentDidMount() {
        let id = `${this.id}`;

        let confirmedDelete = confirm('Are you sure?');
        console.log(confirmedDelete);

        if (confirmedDelete) {
            blogService.destroy(id)
            .then((result) => {
                this.props.history.replace('/');
            }).catch((err) => {
                console.log(err);
            });            
        } else {
            this.props.history.replace(`/read/${this.id}`);
        }
    

    }

    render() {

        return <div />;
    }
}

export default Delete;
