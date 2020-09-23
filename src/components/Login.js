import React, { useState } from 'react'
import '../Login.css';
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import axios from 'axios';

const LOGIN_URL = ('http://localhost:1337/login');

// TODO: refactor as functional component (time permitting)

class Login extends React.Component {
    // login state 

    state = {
        email: '',
        password: '',
    };

    // Use function to store the 
    handleChange = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log( )
        axios.post(  LOGIN_URL, { 
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            console.log('response data', res.data)
            this.props.onLogin(res.data.token, res.data.user)
            this.props.history.push('/')
        })
        .catch(error => {
            // tODO: what if user provided incorrect dtes/-=-.> need to show error message: put 
            console.log('error logging in : ', error)
        })
        
    }

    render(){
        return (
            <div className="login">
            <Link to='/'>
                <img
                    className="login_logo"
                    src="https://static.dribbble.com/users/261302/screenshots/1361907/logoplaceholder.png"
                />
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>

                <form onSubmit={this.handleSubmit}>
                    <h5>E-mail</h5>
                    <input 
                        type="text" 
                        name="email"
                        onChange={this.handleChange} 
                    />

                    <h5>Password</h5>
                    <input 
                        type="password" 
                        name="password"
                        onChange={this.handleChange} 
                    />

                    <button className="login_signInButton">Sign in</button>
                </form>

                {/* TODO : create register button/API functionality */}

            </div>
        </div>
        ); // return
    } // render

} // Class login


export default Login
