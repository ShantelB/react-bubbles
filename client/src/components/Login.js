import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

 const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: "",
      password: ""
  })
  const {push} = useHistory();

 const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        push("/protected");
      })
      .catch(err => console.log(err));
  };

    return (
      <div>
        <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={login}>
        <label id="name">Username:</label>
          <input
            type="text"
            name="username"
            label="username"
            placeholder='Username'
            value={credentials.username}
            onChange={handleChange}
          />
          <label id="name">Password:</label>
          <input
            type="password"
            name="password"
            label="password"
            placeholder='Password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  
}

export default Login;