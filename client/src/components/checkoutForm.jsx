import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { postCharge } from '../services/stripeService';
import CardSection from './cardSection';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: ''
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            let tokenObj = await this.props.stripe.createToken({name: this.state.customerName });
            await postCharge({ id: tokenObj.token.id, amount: 10 });
        } catch (e) {
            console.log(e);
        }
    }

    handleNameInput(e) {
        this.setState({ customerName: e.target.value });
    }

    render() {

        return (
            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <h1 className='display-3 font-weight-bold'>Donations</h1>
            <form className='bg-light w-50 border border-dark border-4' onSubmit={(e) => this.handleSubmit(e)}>
                <input className='w-100' onChange={(e) => this.handleNameInput(e)} placeholder="Name" htmlFor="name" id="name" />
                <CardSection />
                <div className='moveBtn'><button className='btn-block btn-primary'>SUBMIT</button></div>
            </form>
            <h2>Thank you for your Donations!</h2>

            </div>
            
        );
    }
}

export default injectStripe(CheckoutForm);
