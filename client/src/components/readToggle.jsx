import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
// import { Link } from 'react-router-dom';
import * as userService from '../services/user';
import Delete from './delete';
import Edit from './edit';

class ReadToggle extends Component {
    constructor(props) {
        super(props);
        this.state = { userid: "",
                        toggle: null };
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
      
    handleEdit() {
        this.setState({ toggle: true })
    }

    handleDelete() {

        let confirmedDelete = confirm('Are you sure?');
        console.log(confirmedDelete);

        if (confirmedDelete) {
            this.setState({ toggle: false })           
        } else {
            console.log('Declined delete option');
            console.log(this.props.blogid);
        }
    }

    render() {
        let blogid = this.props.blogid;
        // console.log(this.props.authorid);
        if (this.props.authorid === this.state.userid) {
            switch(this.state.toggle) {
                case true:
                  return(
                      <Edit blogid={blogid} userid={this.state.userid} authorid={this.props.authorid} />)
                      break;
                case false:
                  return(
                      <Delete blogid={blogid} userid={this.state.userid} authorid={this.props.authorid} />)
                      break;
                default:
                   return(
                    <div>
                        <button className="btn btn-dark btn-lg mt-3 ml-2 text-white" onClick={() => this.handleEdit()}>Edit Blog</button>
                        <button className="btn btn-dark btn-lg mt-3 ml-2 text-white" onClick={() => this.handleDelete()}>Delete Blog</button>
                    </div>)
            }
             
        } else {
            return(
            <div />)
        }
    }
}


export default ReadToggle;