import React, { Component } from 'react';
import { sendContactEmail } from '../services/contact';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleName(name) {
        this.setState({ name });
    }

    handleEmail(email) {
        this.setState({ email });
    }

    handleMessage(message) {
        this.setState({ message });
    }

    handleSubmit(e) {
        e.preventDefault();
        sendContactEmail(this.state.name, this.state.email, this.state.message)
        .then(() => {
            // redirect to homepage
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={ (e) => this.handleSubmit(e) }>
                    <div className='form-group mt-5 mb-0'>
                        <label htmlFor='name'><h2 className='mb-0'>Name:</h2></label>
                        <input onChange={ (e)  => this.handleName(e.target.value)} id='name' type='text' className='form-control' required />
                    </div>
                    <div className='form-group mb-0'>
                        <label htmlFor='email'><h2 className='mb-0'>Email Address:</h2></label>
                        <input onChange={ (e)  => this.handleEmail(e.target.value)} id='email' type='email' className='form-control' required />
                    </div>
                    <div className="form-group mb-0">
                        <textarea onChange={ (e)  => this.handleMessage(e.target.value)} cols='30' rows='10' class='form-control'></textarea>    
                    </div>
                    <input type='submit' className='btn-block btn-primary mt-0 border-2 border-dark' />
                </form>
            </div>

        )
    }
}

export default Contact;