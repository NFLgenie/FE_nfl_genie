import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

  return (
    <section className='login-outer-container'>
      <h1 className='login-text'>NFL Genie ‍🏈</h1>
      <input className='login-input' placeholder='username...'/>
      <input className='login-input' placeholder='password...' />
      <Link to={'/'}><button className='login-submit-button'>submit</button></Link>
    </section>
  )
}

export default Login;
