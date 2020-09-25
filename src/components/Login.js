import React, { useState } from 'react'
import '../Login.css';
import { Link, HashRouter as Router } from 'react-router-dom';
import axios from 'axios';
import {LOGIN_URL} from '../constants'
import '../Checkout.css'

class Login extends React.Component {
    // login state 

    state = {
        email: '',
        password: '',
    };

    // Store the information entered into the fields in the form as soon as there is a change by listening for event / moment something entered in the form
    handleChange = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)
        this.setState({
            // it differentiates between the email/password inputs using the ‘name’ value in the form input element, then assigns it a value to be stored in state
            [event.target.name]:event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log( )
        // HandleSubmit posts the login details entered in the form to the backend using axios post request.
        axios.post(  LOGIN_URL, { 
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            console.log('response data', res.data)
        // Sets token and user app props to the token and user object received from backend.
            this.props.onLogin(res.data.token, res.data.user)
        // Redirects user to productIndex page.
            this.props.history.push('/')
        })
        .catch(error => {
            // tODO: what if user provided incorrect dtes/-=-.> need to show error message: put 
            console.log('Authentication error: incorrect username or password. ', error)
        })
        
    }

    render(){
        return (
            <div className="login">
            <div className='login_container'>
                <h1>Please sign in </h1>

                <form onSubmit={this.handleSubmit} className="formGroup">
                    <input 
                        type="text" 
                        name="email"
                        placeholder = "Email"
                        onChange={this.handleChange} 
                    />

                    <input 
                        type="password" 
                        name="password"
                        placeholder = "Password"
                        onChange={this.handleChange} 
                    />

                    <div>
                        <button className="button-primary">Sign in</button>

                    </div>
                </form>

            </div>
        </div>
        ); // return
    } // render

} // Class login


export default Login
