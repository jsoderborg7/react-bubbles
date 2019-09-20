import React, {useState, useEffect} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = e =>{
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const login = e =>{
    e.preventDefault();
    axiosWithAuth()
      .post('/login', credentials)
      .then(res =>{
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubbles')
      })
  }


  return (
    <div className="welcomePage">
      <h1>Welcome to the Bubble App!</h1>
      <div className="loginContainer"> 
        <p>Login Here</p>
        <form onSubmit={login} className="loginForm">
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={credentials.username}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
            placeholder="Password"
          />
          <button>Login</button>
        </form>
      </div> 
    </div>
  );
};

export default Login;
