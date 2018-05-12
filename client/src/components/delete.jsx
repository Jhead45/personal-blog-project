import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import * as blogService from '../services/blog';
import * as userService from '../services/user';


class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            authorid: '',
            userid: ''
        };
        this.id = this.props.match.params.id;
    }

    componentDidMount() {
        let id = `${this.id}`;

        userService.checkUser()
        .then((res) => {
          this.setState({ userid: res });
        })
        .catch((err) => {
          console.log(err);
        })

    if(this.state.userid === this.state.authorid) {

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
    } else {
        alert('WARNING: You do not have access to Delete another Author\'s Post!');
    }

    }

    render() {
        // console.log(this.state.title);
        // console.log(this.state.content);
        return <div />;
    }
}

export default Delete;
