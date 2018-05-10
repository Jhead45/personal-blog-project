import React, { Component } from 'react';
import { render } from 'react-dom';
import * as blogService from '../services/blog';
import * as userService from '../services/user';
import { Link } from "react-router-dom";



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = ''
            

    }

    onInputChange(value) {
      this.setState({ name: value });
      }
    
    onInputChange2(value) {
      this.setState({ email: value });
      }

    onInputChange3(value) {
      this.setState({ password: value });
      }

    handleForm(event, name, email, password) {
      event.preventDefault();
      console.log(this.state);

        userService.signup(this.state.name, this.state.email, this.state.password)
            .then((result) => {
              this.props.history.replace(`/welcome`);
              console.log(this.state);
            });
    }

    render() {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.password);
        return (
            <div>
                   
            <div className='text-right'>
            <Link to="/"><button type="button" className="btn btn-dark btn-lg mt-2 mr-5">Go Back</button></Link>
        </div>
        <h1 className='text-center'>Create User!</h1>
        <form
          className="d-flex justify-content-center mb-3 form-control-lg"
          onSubmit={(event) => this.handleForm(event, this.state.name, this.state.email, this.state.password)}
        >
        <div className='form-group'>
          <input className='d-block w-100 trBorder'
            placeholder='name'
            value={this.state.name}
            onChange={(event) => this.onInputChange(event.target.value)}
          />
          <input className='d-block trBorder'
            placeholder='email address'
            value={this.state.email}
            onChange={(event) => this.onInputChange2(event.target.value)}
          />
          <input className='d-block trBorder'
            placeholder='password'
            value={this.state.password}
            onChange={(event) => this.onInputChange3(event.target.value)}
          />
          

          <button className="bg-dark mt-1 text-white" type="submit">Submit</button>
          </div>
        </form>
      </div>  
        )
    }
}

export default Signup;
