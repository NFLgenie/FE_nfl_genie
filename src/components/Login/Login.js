import React from 'react';
import './Login.css';

const Login = () => {

  return (
    <section className='login-outer-container'>
      <h1 className='login-text'>login</h1>
      <input className='login-input' placeholder='username...'/>
      <input className='login-input' placeholder='password...' />
      <button className='login-submit-button'>submit</button>
    </section>
  )
}

export default Login;
