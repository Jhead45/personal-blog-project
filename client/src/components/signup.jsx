import React, { Component } from 'react';
import { render } from 'react-dom';
import * as blogService from '../services/blog';
import * as userService from '../services/user';
import { Link } from "react-router-dom";



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          password: ''
        }
            

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
        <div className='form'>        
        <h1 className='display-3 font-weight-bold'>Create User!</h1>
        <form
          className="form-control-lg"
          onSubmit={(event) => this.handleForm(event, this.state.name, this.state.email, this.state.password)}
        >
          <input className='forBorder'
            placeholder='name'
            value={this.state.name}
            onChange={(event) => this.onInputChange(event.target.value)}
          />
          <input className='forBorder'
            placeholder='email address'
            value={this.state.email}
            onChange={(event) => this.onInputChange2(event.target.value)}
          />
          <input className='forBorder'
            placeholder='password'
            type='password'
            value={this.state.password}
            onChange={(event) => this.onInputChange3(event.target.value)}
          />
          

          <button className="btn-primary btn-block text-white border-dark border-4" type="submit">Submit</button>
        </form>
      </div>  
        )
    }
}

export default Signup;
